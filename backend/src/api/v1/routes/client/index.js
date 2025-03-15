const express = require('express');
const router = express.Router();

const NhaORoute = require('./nhaO.route');
const CanHoRoute = require('./canHo.route');
const TinTucRoute = require('./tinTuc.route');

router.use('/NhaO', NhaORoute);
router.use('/CanHo', CanHoRoute);
router.use('/TinTuc', TinTucRoute);

module.exports = router;
