const express = require('express');
const router = express.Router();

const {
    handlerGetAllCanHo,
    handlerGetCanHoBySlug,
} = require('../../../../../src/api/v1/controllers/client/canHo.controller');

router.get('/', handlerGetAllCanHo);

router.get('/:slug', handlerGetCanHoBySlug);

module.exports = router;
