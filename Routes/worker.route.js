const express = require('express');
const router = express.Router();

const worker_controller = require('../controllers/worker.controller');

router.post('/create', worker_controller.product_create);
router.get('/:id', worker_controller.product_read);
router.put('/:id/update', worker_controller.product_update);
router.delete('/:id/delete', worker_controller.product_delete);

module.exports = router;