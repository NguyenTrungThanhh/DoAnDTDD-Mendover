const { GetAllTinTuc, AddTinTuc, DeleteTinTuc } = require('../../../../../src/api/v1/services/tinTuc.service');

const handlerGetAllTinTuc = async (req, res) => {
    try {
        const allTinTuc = await GetAllTinTuc();
        res.json({ success: true, news: allTinTuc });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const handlerAddTinTuc = async (req, res) => {
    try {
        console.log('Body nhận được:', req.body);
        console.log('Files nhận được:', req.files);

        const { name, date } = req.body;
        const desc = req.body.desc ? JSON.parse(req.body.desc) : [];

        // Lấy link ảnh đã upload lên Cloudinary từ multer
        const imageBigUrl = req.files['imageBig'][0].path;
        const imageSmallUrl = req.files['imageSmall'] ? req.files['imageSmall'][0].path : null;

        const TinTucData = {
            name,
            date,
            desc,
            imageBig: imageBigUrl,
            imageSmall: imageSmallUrl,
        };

        const newTinTuc = await AddTinTuc(TinTucData);
        res.json({ success: true, message: 'Thêm tin tức thành công', news: newTinTuc });
    } catch (error) {
        console.error('Lỗi backend:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const handlerDeleteTinTuc = async (req, res) => {
    const { id } = req.params;
    try {
        await DeleteTinTuc(id);
        res.json({ success: true, message: 'Xóa tin tức thành công' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

module.exports = {
    handlerGetAllTinTuc,
    handlerAddTinTuc,
    handlerDeleteTinTuc,
};
