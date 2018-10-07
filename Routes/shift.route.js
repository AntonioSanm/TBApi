var express = require('express');
var router = express.Router();

var shift_controller = require('../controllers/shift.controller');

router.get('/v3/get', shift_controller.shift_read);
router.post('/v3/create', shift_controller.shift_create);
router.put('/v3/update/:id', shift_controller.shift_update);
router.delete('/v3/delete/:id', shift_controller.shift_delete);



module.exports = router;