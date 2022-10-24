const Book = require("../models/Book");
const authorService = require("./author-service");

const bookService = {
  findAll: async () => {
    return await Book.findAll();
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
};

module.exports = bookService
