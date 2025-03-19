const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        nhaO: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'NhaO',
                required: false,
            },
        ],
        canHo: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'CanHo',
                required: false,
            },
        ],
    },
    { timestamps: true },
);

module.exports = mongoose.model('Cart', cartSchema);
