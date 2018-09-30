const express = require('express');
const router = express.Router();

const worker_controller = require('../controllers/worker.controller');

router.post('/create', worker_controller.worker_create);
router.get('/:id', worker_controller.worker_read);
router.put('/:id/update', worker_controller.worker_update);
router.delete('/:id/delete', worker_controller.worker_delete);

module.exports = router;