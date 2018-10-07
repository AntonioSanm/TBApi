var Mongoose = require('../database').Mongoose,
    Schema = Mongoose.Schema;

var WorkerSchema = new Schema({
    id: { type: Number, required: true },
    availability : [ {type: String, required: true} ],
    payrate: { type: Number }
},{ versionKey: false });

module.exports = Mongoose.model('Worker', WorkerSchema);