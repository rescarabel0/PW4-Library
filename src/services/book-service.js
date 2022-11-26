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
            where: {title},
        });
    },
    findByAuthor: async (authorId) => {
        return Book.findAll({
            where: {authorId},
        });
    },
    save: async (title, date, authorId) => {
        const author = await authorService.findById(authorId);
        if (!author) return null;
        return Book.create({
            title,
            date,
            authorId: author.id,
        });
    },
    update: async (id, title, date) => {
        return await Book.update({title, date}, {where: {id}});
    },
    delete: async (id) => {
        return await Book.destroy({where: {id}});
    },
};

module.exports = bookService;
