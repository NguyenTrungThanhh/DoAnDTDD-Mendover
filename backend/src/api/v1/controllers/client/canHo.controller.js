const { GetAllCanHo, GetCanHoBySlug } = require('../../../../../src/api/v1/services/canHo.service');

const handlerGetAllCanHo = async (req, res) => {
    try {
        const allCanHo = await GetAllCanHo();
        res.json({ success: true, products: allCanHo });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const handlerGetCanHoBySlug = async (req, res) => {
    const { slug } = req.params;
    try {
        const canHo = await GetCanHoBySlug(slug);
        res.json({ success: true, canHo: canHo });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

module.exports = {
    handlerGetAllCanHo,
    handlerGetCanHoBySlug,
};
