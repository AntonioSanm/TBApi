var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var worker = require('./routes/worker.route');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/workers', worker);

var port = 8888;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});