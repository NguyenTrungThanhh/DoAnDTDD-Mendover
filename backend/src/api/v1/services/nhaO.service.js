const nhaOModel = require('../../../../src/api/v1/models/nhaOModel');

const GetAllNhaO = async () => {
    return await nhaOModel.find({});
};

const GetNhaOBySlug = async (slug) => {
    return await nhaOModel.findOne({ slug });
};

const AddNhaO = async (data) => {
    return await nhaOModel.create(data);
};

const DeleteNhaO = async (id) => {
    return await nhaOModel.findByIdAndDelete(id);
};

module.exports = {
    GetAllNhaO,
    GetNhaOBySlug,
    AddNhaO,
    DeleteNhaO,
};
