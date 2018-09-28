const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const worker_controller = require('../Controllers/worker.controller');


// a simple test url to check that all of our files are communicating correctly.

router.post('/create', worker_controller.product_create);
router.get('/:id', worker_controller.product_read);
router.put('/:id/update', worker_controller.product_update);
router.delete('/:id/delete', worker_controller.product_delete);

module.exports = router;