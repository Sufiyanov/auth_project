const express = require('express');
const router  = express.Router();
const controller = require('../controllers/position');

router.get('/', controller.login);

router.post('/', controller.register);
router.patch('/', controller.update);
router.delete('/', controller.remove);

module.exports = router;