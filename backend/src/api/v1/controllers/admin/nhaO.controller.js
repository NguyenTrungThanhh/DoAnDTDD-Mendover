const { GetAllNhaO, AddNhaO, DeleteNhaO } = require('../../../../../src/api/v1/services/nhaO.service');

const handlerGetAllNhaO = async (req, res) => {
    try {
        const allNhaO = await GetAllNhaO();
        res.json({ success: true, products: allNhaO });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const handlerAddNhaO = async (req, res) => {
    try {
        const { name, price, desc } = req.body;

        const imageMain = req.files['imageMain'] ? req.files['imageMain'][0].path : null;
        const imageSub = req.files['imageSub'] ? req.files['imageSub'][0].path : null;

        const nhaOData = {
            name,
            price,
            desc,
            imageMain,
            imageSub,
        };

        await AddProduct(nhaOData);

        res.json({ success: true, message: 'Thêm sản phẩm thành công', product: nhaOData });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const handlerDeleteNhaO = async (req, res) => {
    const { id } = req.params;
    try {
        await DeleteNhaO(id);
        res.json({ success: true, message: 'Xóa sản phẩm thành công' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

module.exports = {
    handlerGetAllNhaO,
    handlerAddNhaO,
    handlerDeleteNhaO,
};
