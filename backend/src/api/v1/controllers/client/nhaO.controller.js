const { GetAllNhaO, GetNhaOBySlug } = require('../../../../../src/api/v1/services/nhaO.service');

const handlerGetAllNhaO = async (req, res) => {
    try {
        const allNhaO = await GetAllNhaO();
        res.json({ success: true, products: allNhaO });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const handlerGetNhaOBySlug = async (req, res) => {
    const { slug } = req.params;
    try {
        const nhaO = await GetNhaOBySlug(slug);
        res.json({ success: true, nhaO: nhaO });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

module.exports = {
    handlerGetAllNhaO,
    handlerGetNhaOBySlug,
};
