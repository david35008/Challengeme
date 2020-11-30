const router = require('express').Router();
const checkAdmin = require('../../../middleware/checkAdmin');

router.use('/teacher', require('./teacher'));
router.use('/admin', checkAdmin, require('./admin'));
router.use('/student', require('./student'));

module.exports = router;
