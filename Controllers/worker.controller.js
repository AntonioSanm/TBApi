var Worker = require('../models/worker.model');

exports.worker_create = function (req, res, next) {
    var worker = new Worker(
        {
            availability: req.body.availability,
            payrate: req.body.payrate
        }
    );

    worker.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Worker Created successfully')
    })
};

exports.worker_read = function (req, res, next) {
    Worker.findById(req.params.id, function (err, worker) {
        if (err) return next(err);
        res.send(worker);
    })
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
    })
};