const Book = require("../models/Book");
const authorService = require("./author-service");

const bookService = {
  findAll: async () => {
    return await Book.findAll();
  },
  findById: async (id) => {
    return await Book.findByPk(id);
  },
  findByTitle: async (title) => {
    return Book.findOne({
      where: { title },
    });
  },
  save: async (title, date, authorName) => {
    const author = await authorService.findByName(authorName);
    if (!author) return null;
    return Book.create({
      title,
      date,
      idAuthor: author.id,
    });
  },
  update: async (id, title, date) => {
    return await Book.update({ title, date }, { where: { id } });
  },
  delete: async (id) => {
    return await Book.destroy({ where: { id } });
  },
};

module.exports = bookService;
