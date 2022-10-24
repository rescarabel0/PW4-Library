const jwt = require("jsonwebtoken");
const User = require("../models/User");

const UserService = {
  findByLoginAndPassword: async (login, password) => {
    return await User.findOne({
      where: { login, password },
    });
  },
  findByLogin: async (login) => {
    return await User.findOne({
      where: { login },
    });
  },
  save: async (login, password) => {
    return await User.create({ login, password });
  },
  findAll: async () => {
    return await User.findAll();
  },
};

module.exports = UserService;
