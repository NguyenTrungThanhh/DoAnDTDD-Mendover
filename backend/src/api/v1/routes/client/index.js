const express = require('express');
const router = express.Router();

const NhaORoute = require('./nhaO.route');
const CanHoRoute = require('./canHo.route');

router.use('/NhaO', NhaORoute);
router.use('/CanHo', CanHoRoute);

module.exports = router;
