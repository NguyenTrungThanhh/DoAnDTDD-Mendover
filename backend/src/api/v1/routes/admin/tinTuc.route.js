const express = require('express');
const router = express.Router();
const upload = require('../../middleware/multer');

const {
    handlerGetAllTinTuc,
    handlerAddTinTuc,
    handlerDeleteTinTuc,
} = require('../../../../../src/api/v1/controllers/admin/tinTuc.controller');

router.get('/', handlerGetAllTinTuc);

router.post(
    '/add',
    upload.fields([
        { name: 'imageBig', maxCount: 1 },
        { name: 'imageSmall', maxCount: 1 },
    ]),
    handlerAddTinTuc,
);

router.delete('/delete/:id', handlerDeleteTinTuc);

module.exports = router;
