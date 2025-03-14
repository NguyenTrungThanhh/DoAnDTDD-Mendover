const { GetAllCanHo, AddCanHo, DeleteCanHo } = require('../../../../../src/api/v1/services/canHo.service');

const handlerGetAllCanHo = async (req, res) => {
    try {
        const allCanHo = await GetAllCanHo();
        res.json({ success: true, products: allCanHo });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const handlerAddCanHo = async (req, res) => {
    try {
        console.log('Body nhận được:', req.body);
        console.log('Files nhận được:', req.files);

        const { name, price } = req.body;
        const desc = req.body.desc ? JSON.parse(req.body.desc) : [];

        // Lấy link ảnh đã upload lên Cloudinary từ multer
        const imageMainUrl = req.files['imageMain'][0].path;
        const imageSubUrl = req.files['imageSub'][0].path;

        const canHoData = {
            name,
            price,
            desc,
            imageMain: imageMainUrl,
            imageSub: imageSubUrl,
        };

        const newCanHo = await AddCanHo(canHoData);
        res.json({ success: true, message: 'Thêm sản phẩm thành công', product: newCanHo });
    } catch (error) {
        console.error('Lỗi backend:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const handlerDeleteCanHo = async (req, res) => {
    const { id } = req.params;
    try {
        await DeleteCanHo(id);
        res.json({ success: true, message: 'Xóa sản phẩm thành công' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

module.exports = {
    handlerGetAllCanHo,
    handlerAddCanHo,
    handlerDeleteCanHo,
};
