var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var mongoStore = require('connect-mongo')({session: expressSession});
var mongoose = require('mongoose');
require('./models/administrator_model.js');
require('./models/profesor_model.js');
require('./models/school_model.js');
require('./models/student_model.js');
require('./models/university_model.js');
var conn = mongoose.connect('mongodb://localhost/proyectoI');
var app = express();
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(bodyParser());
app.use(cookieParser());
app.use(expressSession({
          secret: 'SECRET',
          cookie: {maxAge: 60*60*1000},
          store: new mongoStore({
		    //    host: '127.0.0.1',
		    //    port: '27017',
		        db: mongoose.connection.db, //'myapp',
		        collection: 'sessions',
		        url: 'mongodb://localhost:27017/proyectoI'
   
})
}));
require('./routes')(app);
app.listen(80);
