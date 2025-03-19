const tinTucModel = require('../../../../src/api/v1/models/tinTucModel');

const GetAllTinTuc = async () => {
    return await tinTucModel.find({});
};

const GetTinTucBySlug = async (slug) => {
    return await tinTucModel.findOne({ slug });
};

const AddTinTuc = async (data) => {
    return await tinTucModel.create(data);
};

const DeleteTinTuc = async (id) => {
    return await tinTucModel.findByIdAndDelete(id);
};

module.exports = {
    GetAllTinTuc,
    GetTinTucBySlug,
    AddTinTuc,
    DeleteTinTuc,
};
