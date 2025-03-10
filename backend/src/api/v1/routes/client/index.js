const express = require('express');
const router = express.Router();

const NhaORoute = require('./nhaO.route');

router.use('/NhaO', NhaORoute);

module.exports = router;
