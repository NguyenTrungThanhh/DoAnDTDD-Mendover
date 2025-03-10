const express = require('express');
const router = express.Router();
const upload = require('../../middleware/multer');

const {
    handlerGetAllNhaO,
    handlerAddNhaO,
    handlerDeleteNhaO,
} = require('../../../../../src/api/v1/controllers/admin/nhaO.controller');

router.get('/', handlerGetAllNhaO);

router.post('/add', upload.fields([{ name: 'imageMain' }, { name: 'imageSub' }]), handlerAddNhaO);

router.delete('/delete/:id', handlerDeleteNhaO);

module.exports = router;
