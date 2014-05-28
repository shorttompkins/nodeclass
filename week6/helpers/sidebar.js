var models = require('./models'),
    async = require('async');

module.exports = function(viewModel, callback){

    async.parallel([
        function(callback) {
            setupStats(callback);
        },
        function(callback) {
            setupImages(callback);
        },
        function(callback) {
            setupComments(callback);
        }
    ], function(err, results){
        viewModel.sidebar = {
            stats: results[0],
            popular: results[1],
            comments: results[2]
        };

        callback(null, viewModel);
    });
};

// function to setup Misc Stats for the sidebar
var setupStats = function(callback) {
    async.parallel([
        function(callback) {
            models.Image.count({}, function(err, total){
                callback(null, total);
            });
        },
        function(callback) {
            models.Comment.count({}, function(err, total){
                callback(null, total);
            });
        },
        function(callback) {
            models.Image.aggregate({ $group : {
                _id : '1',
                viewsTotal : { $sum : '$views' }
            }}, function(err, result) {
                var viewsTotal = 0;
                if (result.length > 0) {
                    viewsTotal += result[0].viewsTotal;
                }
                callback(null, viewsTotal);
            });
        },
        function(callback) {
            models.Image.aggregate({ $group : {
                _id : '1',
                likesTotal : { $sum : '$likes' }
            }}, function (err, result) {
                var likesTotal = 0;
                if (result.length > 0) {
                    likesTotal += result[0].likesTotal;
                }
                callback(null, likesTotal);
            });
        }
    ], function(err, results){
        callback(null, {
            images: results[0],
            comments: results[1],
            views: results[2],
            likes: results[3]
        });
    });
};

// function to setup latest Comments for the sidebar
var setupComments = function(callback) {
    models.Comment.find({}, {}, { limit: 5, sort: { 'timestamp': -1 } },
        function(err, comments){
            var attachImage = function(comment, callback) {
                models.Image.findOne({ _id : comment.image_id},
                    function(err, image) {
                        if (err) throw err;

                        comment.image = image;
                        callback(null, null);
                    });
            };

            async.eachSeries(comments, attachImage,
                function(err) {
                    if (err) throw err;

                    callback(null, comments);
                });
        });
};

// function to setup most popular Images for the sidebar
var setupImages = function(callback) {
    models.Image.find({}, {}, { limit: 9, sort: { likes: -1 }},
        function(err, images) {
            if (err) throw err;

            callback(null, images);
        });
};
