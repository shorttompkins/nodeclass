var express = require('express'),
   config = require('./server/configure'),
   mongoose = require('mongoose'),
   app = express();

app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');

app = config(app);

mongoose.connect('mongodb://localhost/imgPloadrAcademy');
mongoose.connection.on('open', function() {
    console.log('Mongoose connected.');
});

var server = app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});
