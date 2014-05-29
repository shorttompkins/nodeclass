## Week 6

The complete code from lessons covered during week 6.

The big addition this week is the inclusion of the sidebar with its various stats, content and data displayed.  This includes generic site stats, the most popular images, and the most recent comments.  The sidebar is included on the homepage and an image page.

### To Launch

```
    $ npm install
    $ mongod (in a separate Terminal window: ⌘-T)
    $ node server.js (in original Terminal window)
    Server up: http://localhost:3300
    Mongoose connected.
```

Open your browser and point to http://localhost:3300

You should see the sidebar visible and populated with actual content.

### Differences from last week

A few changes were made to existing code from the previous week:

* Include a new file `helpers/sidebar.js`.  This file, while somewhat large, contains all of the various database calls to populate the sidebar viewModel.  Note that this is the first use of the `async` npm module within the project.
* Update the `home.js` and `image.js` controllers adding the code that wraps the `res.render` call with a sidebar wrapper and callback:

```
    // controllers/home.js - line #12 becomes:
    sidebar(viewModel, function(err, viewModel) {
        res.render('index', viewModel);
    });

    // controllers/image.js - line #23 becomes:
    sidebar(viewModel, function(err, viewModel) {
        res.render('image', viewModel);
    });
```
* Include the necessary require() at the top of the home and index controllers so that the sidebar module is available to use within the controller:
```
sidebar = require('../helpers/sidebar');
```
