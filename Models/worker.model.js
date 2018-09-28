var Mongoose = require('../database').Mongoose,
    Schema = Mongoose.Schema;

var WorkerSchema = new Schema({
    availability: {type: Array},
    payrate: {type: Number}
});

module.exports = Mongoose.model('Worker', WorkerSchema);