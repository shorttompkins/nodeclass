var models = require('../helpers/models');

module.exports = {
    index: function(req, res) {
        var viewModel = {
            images: {}
        };

        models.Image.find({}, {}, { sort: { timestamp: -1 }}, function(err, images) {
            if (err) throw err;
            viewModel.images = images;
            res.render('index', viewModel);
        });
    }
};
