## Week 5

The complete code from lessons covered during week 5.

The big addition this week is the ability to Like images, Post comments, and use jQuery to implement a few basic but cool features into the UI - namely real-time AJAX Like functionality, and revealing the Post Comment form via slide animation.

### To Launch

```
    $ mongod (in a separate Terminal window: ⌘-T)
    $ node server.js
    Server up: http://localhost:3300
    Mongoose connected.
```

Open your browser and point to http://localhost:3300

Attempt to Like an image and the counter should continue to increase.  Additionally reloading the page should show the count persisted.  Attempt to reveal the Post Comment form and submit the comment, which should reload the page and display the comment that you posted.  Gravatars should be displayed via the commentors email address.

### Differences from last week

A few changes were made to existing code from the previous week:

* Update the `image.js` controller adding the code for both the `like` and `comment` functions.
* Update the `res.render('image', viewModel)` line in the `image` function with the slightly updated code that first retrieves the list of comments from MongoDB and appends them to the `viewModel` and then executes the render.
* Include `public/js/scripts.js` and include code from the file in the repo.
