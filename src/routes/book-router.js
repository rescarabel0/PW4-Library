const express = require("express");
const router = express.Router();

const bookService = require("../services/book-service");

router.get("/", async (req, res) => {
  return res.send(await bookService.findAll());
});

router.get("/:id", async (req, res) => {
  return res.send(await bookService.findById(req.params.id));
});

router.get("/author/:id", async (req, res) => {
  return res.send(await bookService.findByAuthor(req.params.id));
});

router.post("/", async (req, res) => {
  const book = await bookService.findByTitle(req.body.title);
  if (book) return res.status(409).json({ message: "Book already exists" });

  const createdBook = await bookService.save(
    req.body.title,
    req.body.date,
    req.body.author
  );
  return res
    .status(201)
    .json({ message: "Book created successfully", book: createdBook });
});

router.put("/:id", async (req, res) => {
  const book = await bookService.findById(req.params.id);
  if (!book) return res.status(400).json({ message: "Book does not exist" });

  const updatedBook = await bookService.update(req.params.id,req.body.title, req.body.date);
  return res
    .status(200)
    .json({ message: "Book updated successfully", book: updatedBook });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const book = await bookService.findById(id);
  if (!book) return res.status(400).json({ message: "Book does not exist" });

  const deletedBook = await bookService.delete(id);
  return res
    .status(200)
    .json({ message: "Book successfully deleted", book: deletedBook });
});

module.exports = router;
