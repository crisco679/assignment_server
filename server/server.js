var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var indexRouter = require('./routers/indexRouter');
var assignmentRouter = require('./routers/assignmentsRouter');

var app = express();
//[[[[[[[[[[[[[[[[[[[[[[[Global Configuartion]]]]]]]]]]]]]]]]]]]]]]]
app.use(express.static('server/public'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:true}));

//[[[[[[[[[[[[[[[[[[[[Routers]]]]]]]]]]]]]]]]]]]]
app.use('/', indexRouter);
app.use('/assignment', assignmentRouter);


//[[[[[[[[[[[[[[[[[[[[[[ MONGO ]]]]]]]]]]]]]]]]]]]]]]
var mongoURI = 'mongodb://localhost/assignmentsToday';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('MongoDB connection error:', err);
})

MongoDB.once('open', function(){
  console.log('MongoDB connection open');
})

//[[[[[[[[[[[[[[[[[[[[[[[[[ SERVER ]]]]]]]]]]]]]]]]]]]]]]]]]
var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port, 'press ctrl-c to exit');
})
