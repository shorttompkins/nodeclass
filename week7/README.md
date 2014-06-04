## Week 7

The complete code from lessons covered during week 7.

This is the completed app, along with an additional file needed for Heroku deploys.

### To Launch

```
    $ npm install
    $ mongod (in a separate Terminal window: ⌘-T)
    $ node server.js (in original Terminal window)
    Server up: http://localhost:3300
    Mongoose connected.
```

Open your browser and point to http://localhost:3300

Everything should work the way its supposed to.

### Deploying to Heroku

First register a free account at [Heroku.com](http://heroku.com) and add Credit Card information (even though you wont be billed) so that you are capable of adding addons to your apps.

Then download and install the [Heroku Toolbelt](https://toolbelt.heroku.com)

From the command line in your project root folder:

1. git init
2. git commit -am “Initial commit"
3. heroku commands
    1. heroku login
    2. touch Procfile
    3. [edit] Procfile
        1. web: node server.js
    4. heroku create (note: Creating APP_NAME_HERE… done)
    5. heroku addons:add mongohq
4. Access your heroku app online: https://dashboard.heroku.com/apps/APP_NAME_HERE/resources
5. Click MongoHQ addon to goto Control Panel
6. Click Admin in left sidebar then Users tag
7. Create a new username and password
8. Copy the URI from the Overview tab
    1. mongodb://<user>:<password>@kahana.mongohq.com:10072/app26015562
9. Update connection string in server.js to point to MongoHQ
10. git commit -am “Heroku Updates” && git push heroku master
11. heroku ps:scale web=1 —app
12. heroku open
13. Image Uploading won’t work!!! See: https://devcenter.heroku.com/articles/s3
