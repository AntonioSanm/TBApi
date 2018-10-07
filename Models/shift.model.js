var Mongoose = require('../database').Mongoose,
    Schema = Mongoose.Schema;

var ShiftSchema = new Schema({
    id: { type: Number, required: true },
    day : [ {type: String, required: true} ],
},{ versionKey: false });

module.exports = Mongoose.model('Shift', ShiftSchema);