const express = require('express');
const router = express.Router();
const upload = require('../../middleware/multer');

const {
    handlerGetAllCanHo,
    handlerAddCanHo,
    handlerDeleteCanHo,
} = require('../../../../../src/api/v1/controllers/admin/canHo.controller');

router.get('/', handlerGetAllCanHo);

router.post(
    '/add',
    upload.fields([
        { name: 'imageMain', maxCount: 1 },
        { name: 'imageSub', maxCount: 1 },
    ]),
    handlerAddCanHo,
);

router.delete('/delete/:id', handlerDeleteCanHo);

module.exports = router;
