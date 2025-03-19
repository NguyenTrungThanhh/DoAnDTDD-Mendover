const express = require('express');
const router = express.Router();

const {
    handlerGetAllUsers,
    handlerSignup,
    handlerLogin,
} = require('../../../../../src/api/v1/controllers/client/user.controller');

router.get('/', handlerGetAllUsers);

router.post('/signup', handlerSignup);

router.post('/login', handlerLogin);

module.exports = router;
