## Week 3

The complete code from lessons covered during week 3.

The success of this code should launch your existing express server and have HTML pages (views) accessible in the browser

### To Launch

```
    $ npm install
    $ node server.js
    Server up: http://localhost:3300
```

Open your browser and point to http://localhost:3300

You should see the homepage of the site with design in place, although most blank.  Additionally you should be able to access http://localhost:3300/images/1 to view the image page (again without any content).

### Differences from last week

A few changes were made to existing code from the previous week:

* Updated `server/configure.js` to include helpers for the Handlebars engine config, required moment module, include router initialization
* The entire `views` folder was included (all of the HTML views, partials, and layout)
* The `controllers` folder was included
* A new `temp` folder was added to `public/upload/temp`
