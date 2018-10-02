var express = require('express');
var router = express.Router();

var worker_controller = require('../controllers/worker.controller');

router.post('/v1/matching' , worker_controller.worker_matching);

router.post('/v3/create', worker_controller.worker_create);
router.get('/v3/:id', worker_controller.worker_read);
router.put('/v3/:id/update', worker_controller.worker_update);
router.delete('/v3/:id/delete', worker_controller.worker_delete);

module.exports = router;