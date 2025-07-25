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
        console.log('Body nhận được:', req.body);
        console.log('Files nhận được:', req.files);

        const { name, price } = req.body;
        const desc = req.body.desc ? JSON.parse(req.body.desc) : [];

        const imageMainUrl = req.files['imageMain'][0].path;
        const imageSubUrl = req.files['imageSub'][0].path;

        const nhaOData = {
            name,
            price,
            desc,
            imageMain: imageMainUrl,
            imageSub: imageSubUrl,
        };

        const newNhaO = await AddNhaO(nhaOData);
        res.json({ success: true, message: 'Thêm sản phẩm thành công', product: newNhaO });
    } catch (error) {
        console.error('Lỗi backend:', error);
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
