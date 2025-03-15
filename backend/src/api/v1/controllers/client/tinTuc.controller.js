const { GetAllTinTuc, GetTinTucBySlug } = require('../../../../../src/api/v1/services/tinTuc.service');

const handlerGetAllTinTuc = async (req, res) => {
    try {
        const allTinTuc = await GetAllTinTuc();
        res.json({ success: true, news: allTinTuc });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const handlerGetTinTucBySlug = async (req, res) => {
    const { slug } = req.params;
    try {
        const TinTuc = await GetTinTucBySlug(slug);
        res.json({ success: true, news: TinTuc });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

module.exports = {
    handlerGetAllTinTuc,
    handlerGetTinTucBySlug,
};
