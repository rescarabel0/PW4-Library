const express = require("express");
const router = express.Router();

const authorService = require("../services/author-service");

router.get("/", async (req, res) => {
  return res.send(await authorService.findAll());
});

router.post("/", async (req, res) => {
  const author = await authorService.findByName(req.body.name);
  if (author) return res.status(409).json({ message: "Author already exists" });

  const createdAuthor = await authorService.save(req.body.name);
  return res
    .status(201)
    .json({ message: "Author created successfully", author: createdAuthor });
});

module.exports = router;
