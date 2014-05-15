## Week 4

The complete code from lessons covered during week 4.

The success of this code should launch your site and be fully database integrated.  Adding new images via the upload form on the homepage should work fine.  Viewing existing images from thumbnails on the homepage should also work.

### To Launch

```
    $ npm install
    $ mongod&
    $ node server.js
    Server up: http://localhost:3300
    Mongoose connected.
```

Open your browser and point to http://localhost:3300

The big change this week was that we are now including a view model into our view templates.  View models are just JavaScript objects that contain variables and data that the template can use to display that data to the screen.  Previously our templates were assuming to receive a view model and assuming to display things like the Title, Description, image etc.  However since no view model was passed to the template, the screens remained mostly black.

Additional our home and image controllers are both full tied to the MongoDB database server.  The view model for both the homepage and image page is populated by real data pulled right from the database server.

### Differences from last week

A few changes were made to existing code from the previous week:

* The `package.json` file was updated to include new dependencies for Mongoose, Async, and MD5. 
(Don't forget to run `npm install` after you edit your package.json file!)
* The `server.js` file was tweaked slightly to include code to open a connection to our MongoDB server using Mongoose.
* A new folder named `helpers` was added and within that a new `models.js` file that contains all of the code for our 2 data models: Image and Comments
* The `controllers/home.js` controller was completly changed.  It now retrieves all of the images in newest order.
* The `controllers/image.js` controller was also completely changed.  It now displays a selected image as well as handles uploading of a new image (from the homepage form)
