const mongoose = require('mongoose');
const slugify = require('slugify');

const NhaOSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        desc: { type: [String], required: true },
        imageMain: { type: String, required: true },
        imageSub: { type: String, required: true },
    },
    { timestamps: true },
);

NhaOSchema.pre('save', function (next) {
    if (!this.slug || this.isModified('name')) {
        this.slug = slugify(this.name, {
            lower: true,
            strict: true,
            locale: 'vi',
        });
    }
    next();
});s

module.exports = mongoose.model('NhaO', NhaOSchema);
