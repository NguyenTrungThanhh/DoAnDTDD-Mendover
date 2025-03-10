const express = require('express');
const router = express.Router();

const {
    handlerGetAllNhaO,
    handlerGetNhaOBySlug,
} = require('../../../../../src/api/v1/controllers/client/nhaO.controller');

router.get('/', handlerGetAllNhaO);

router.get('/slug', handlerGetNhaOBySlug);

module.exports = router;
