const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: false },
    password: { type: String, required: false },
    cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
});

module.exports = mongoose.model('User', userSchema);
