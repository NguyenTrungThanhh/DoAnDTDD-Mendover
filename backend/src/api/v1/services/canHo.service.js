const canHoModel = require('../../../../src/api/v1/models/canHoModel');

const GetAllCanHo = async () => {
    return await canHoModel.find({});
};

const GetCanHoBySlug = async (slug) => {
    return await canHoModel.findOne({ slug });
};

const AddCanHo = async (data) => {
    return await canHoModel.create(data);
};

const DeleteCanHo = async (id) => {
    return await canHoModel.findByIdAndDelete(id);
};

module.exports = {
    GetAllCanHo,
    GetCanHoBySlug,
    AddCanHo,
    DeleteCanHo,
};
