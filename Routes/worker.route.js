var express = require('express');
var router = express.Router();

var worker_controller = require('../controllers/worker.controller');

router.post('/v1/matching' , worker_controller.worker_matching);

router.post('/v2/matching' , worker_controller.worker_matchingPayrate);

router.get('/v3/matching' , worker_controller.worker_matchingDatabase);
router.get('/v3/get', worker_controller.worker_read);
router.post('/v3/create', worker_controller.worker_create);
router.put('/v3/update/:id', worker_controller.worker_update);
router.delete('/v3/delete/:id', worker_controller.worker_delete);



module.exports = router;