var Mongoose = require('mongoose'),
    dev_db_url = 'mongodb://localhost:27017/workers',
    mongoDB = process.env.MONGODB_URI || dev_db_url;

Mongoose.connect(mongoDB);
Mongoose.Promise = global.Promise;

var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

exports.Mongoose = Mongoose;
exports.db = db;