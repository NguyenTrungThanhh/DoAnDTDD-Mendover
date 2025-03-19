const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { StatusCodes } = require('http-status-codes');

const { getAllUser, signup, login } = require('../../services/user.service');
const cartModel = require('../../../../../src/api/v1/models/cartModel');

const handlerGetAllUsers = async (req, res) => {
    try {
        const allUsers = await getAllUser();
        res.status(StatusCodes.OK).json({ success: true, users: allUsers });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false });
    }
};

const handlerSignup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {
            name,
            email,
            password: hashedPassword,
        };

        const user = await signup(userData);

        const cart = new cartModel({ userId: user._id });
        await cart.save();

        user.cart = cart._id;
        await user.save();

        const data = {
            user: {
                id: user._id,
            },
        };

        const token = jwt.sign(data, 'secret_ecom');
        res.status(200).json({ success: true, token }); // Trả về token
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ success: false, error: 'Email already exists' });
        }
        res.status(500).json({ message: error.message });
    }
};

const handlerLogin = async (req, res) => {
    try {
        const user = await login({ email: req.body.email });

        if (user) {
            const passCompare = await bcrypt.compare(req.body.password, user.password);
            if (passCompare) {
                const data = {
                    user: {
                        id: user._id,
                    },
                };
                const token = jwt.sign(data, 'secret_ecom');

                res.status(200).send({
                    success: true,
                    token,
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                    },
                });
            } else {
                res.status(400).json({ success: false, error: 'Sai mật khẩu vui lòng nhập lại !' });
            }
        } else {
            res.status(400).json({ success: false, error: 'Tài khoản không tồn tại !' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    handlerGetAllUsers,
    handlerSignup,
    handlerLogin,
};
