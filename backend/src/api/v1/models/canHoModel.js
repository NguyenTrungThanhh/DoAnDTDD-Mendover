const mongoose = require('mongoose');
const slugify = require('slugify');

const CanHoSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        slug: { type: String, unique: true, index: true },
        price: { type: String, required: true },
        desc: { type: [String], required: true },
        imageMain: { type: String, required: true },
        imageSub: { type: String, required: true },
    },
    { timestamps: true },
);

CanHoSchema.pre('save', function (next) {
    if (!this.slug || this.isModified('name')) {
        this.slug = slugify(this.name, {
            lower: true,
            strict: true,
            locale: 'vi',
        });
    }
    next();
});

module.exports = mongoose.model('CanHo', CanHoSchema);
