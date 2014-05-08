## Node.js installation instructions:


1. Download and install it from nodejs.org
```
$ node -v
$ npm -v
```
---

## MongoDB installation instructions:

```
https://www.mongodb.org/downloads
$ mkdir -p ~/mongodb
$ cd ~/Downloads
$ tar -xvf *.tgz
$ mv mongodb-osx-x86_64-2.4.9 ~/mongodb
```

```
$ mkdir -p ~/data/db
$ ~/mongodb/bin/mongod --dbpath ~/data/db
```

## Test project instructions:

```
$ mkdir ~/testapp
$ cd ~/testapp
$ npm install mongodb
$ touch app.js
$ [edit] app.js
  (paste contents of app.js - save & exit)
$ node app.js
```
