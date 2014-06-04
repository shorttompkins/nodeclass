var models = require('../helpers/models'),
    sidebar = require('../helpers/sidebar');

module.exports = {
    index: function(req, res) {
        var viewModel = {
            images: {}
        };

        models.Image.find({}, {}, { sort: { timestamp: -1 }}, function(err, images) {
            if (err) throw err;
            viewModel.images = images;
            sidebar(viewModel, function(err, viewModel) {
                res.render('index', viewModel);
            });
        });
    }
};
