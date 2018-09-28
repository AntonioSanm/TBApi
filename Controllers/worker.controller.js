const Product = require('../Models/worker.model');

exports.product_create = function (req, res, next) {
    var product = new Product(
        {
            name: req.body.name,
            age: req.body.age
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Worker Created successfully')
    })
};

exports.product_read = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Worker udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};