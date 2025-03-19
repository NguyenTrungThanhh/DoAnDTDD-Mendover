const userModel = require('../../../../src/api/v1/models/userModel');

const getAllUser = async () => {
    return await userModel.find({});
};

const signup = async (data) => {
    return await userModel.create(data);
};

const login = async (data) => {
    return await userModel.findOne(data);
};

module.exports = { getAllUser, signup, login };
