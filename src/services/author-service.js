const Author = require("../models/Author");

const authorService = {
  findAll: async () => {
    return await Author.findAll();
  },
  findById: async (id) => {
    return await Author.findByPk(id);
  },
  findByName: async (name) => {
    return await Author.findOne({ where: { name } });
  },
  save: async (name) => {
    return await Author.create({ name });
  },
  update: async (id, name) => {
    return await Author.update({ name }, { where: { id } });
  },
  delete: async (id) => {
    return await Author.destroy({ where: { id } });
  },
};

module.exports = authorService;
