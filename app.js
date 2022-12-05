var express = require('express');
var app = express();
var user = require('./routes/user');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/userDetail';
var mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection Error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/user', user);
var port = 1235;
app.listen(port, () => {
    console.log('Server is up and running on port number' + port);
});