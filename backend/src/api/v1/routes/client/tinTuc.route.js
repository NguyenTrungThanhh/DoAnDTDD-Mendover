const express = require('express');
const router = express.Router();

const {
    handlerGetAllTinTuc,
    handlerGetTinTucBySlug,
} = require('../../../../../src/api/v1/controllers/client/tinTuc.controller');

router.get('/', handlerGetAllTinTuc);

router.get('/:slug', handlerGetTinTucBySlug);

module.exports = router;
