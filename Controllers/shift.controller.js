var Joi = require('joi');
var Shift = require('../models/shift.model');

exports.shift_create = function (req, res, next) {
    var shift = new Shift(
        {
            id: req.body.id,
            day: req.body.day,
        }
    );

    shift.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Shift Created successfully');
    });
};

exports.shift_read = function (req, res, next) {
    Shift.find({}, function (err, shift) {
        if (err) return next(err);
        res.send(shift);
    });
};

exports.shift_update = function (req, res, next) {
    Shift.findByIdAndUpdate(req.params.id, {$set: req.body }, function (err, shift) {
        if (err) return next(err);
        res.send('Shift udpated.' + shift);
    });
};

exports.shift_delete = function (req, res, next) {
    Shift.findByIdAndRemove(req.params.id, function (err, shift) {
        if (err) return next(err);
        res.send('Deleted successfully!' + shift);
    });
};
