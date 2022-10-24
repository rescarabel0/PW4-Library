const Author = require("../models/Author");

const authorService = {
  findAll: async () => {
    return await Author.findAll();
  },
  findByName: async (name) => {
    return await Author.findOne({ where: { name } });
  },
  save: async (name) => {
    return await Author.create({ name });
  },
};

module.exports = authorService;
