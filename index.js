var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var worker = require('./routes/worker.route');
var shift = require('./routes/shift.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/worker', worker);
app.use('/shift', shift);

var port = 8000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});