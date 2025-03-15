const mongoose = require('mongoose');
const slugify = require('slugify');

const TinTucSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        slug: { type: String, unique: true, index: true },
        date: { type: String, required: true },
        desc: { type: [String], required: true },
        imageBig: { type: String, required: true },
        imageSmall: { type: String },
    },
    { timestamps: true },
);

TinTucSchema.pre('save', function (next) {
    if (!this.slug || this.isModified('name')) {
        this.slug = slugify(this.name, {
            lower: true,
            strict: true,
            locale: 'vi',
        });
    }
    next();
});

module.exports = mongoose.model('TinTuc', TinTucSchema);
