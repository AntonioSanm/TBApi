var Mongoose = require('mongoose'),
    dev_db_url = 'mongodb://localhost/workers';

Mongoose.connect(dev_db_url);
Mongoose.Promise = global.Promise;

var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

exports.Mongoose = Mongoose;
exports.db = db;