const express = require("express");
const router = express.Router();

const bookService = require("../services/book-service");

router.get("/", async (req, res) => {
  return res.send(await bookService.findAll());
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
    .json({ message: "Book created successfully", author: createdBook });
});

module.exports = router;
