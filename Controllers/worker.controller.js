var Joi = require('joi');
var Worker = require('../models/worker.model');
var Shifts = require('../models/shift.model');
var workersShiftsSchema = require('../schemas/workershift.schema');
var matchingService = require('../services/matching.service');


exports.worker_matching = function (req, res, next) {

    Joi.validate(req.body, workersShiftsSchema, (err) => {
        if (err) { 

            return next(err.message);

        } else {
            res.send(matchingService.matching(req.body));

        }

    });
    
};

exports.worker_matchingPayrate = function (req, res, next) {

    Joi.validate(req.body, workersShiftsSchema, (err) => {
        if (err) { 

            return next(err.message);

        } else {
            res.send(matchingService.matching(req.body, true));

        }

    });
    
};

exports.worker_matchingDatabase = function (req, res, next) {
    
    var workersShifts = {
        'workers': '',
        'shifts': ''
    }

    Worker.find({}, function (err, worker) {
        if (err) return next(err);
            workersShifts.workers = worker;

            Shifts.find({}, function(err, shift){
                workersShifts.shifts = shift;
                res.send(matchingService.worker_matchingDatabase(workersShifts));
            })

    });



};

exports.worker_create = function (req, res, next) {
    var worker = new Worker(
        {
            id: req.body.id,
            availability: req.body.availability,
            payrate: req.body.payrate
        }
    );

    worker.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Worker Created successfully');
    });
};

exports.worker_read = function (req, res, next) {
    Worker.find({}, function (err, worker) {
        if (err) return next(err);
        res.send(worker);
    });
};

exports.worker_update = function (req, res, next) {
    Worker.findByIdAndUpdate(req.params.id, {$set: req.body }, function (err, worker) {
        if (err) return next(err);
        res.send('Worker udpated.' + worker);
    });
};

exports.worker_delete = function (req, res, next) {
    Worker.findByIdAndRemove(req.params.id, function (err, worker) {
        if (err) return next(err);
        res.send('Deleted successfully!' + worker);
    });
};
