const express = require("express");
const router = express.Router();

const authorService = require("../services/author-service");

router.get("/", async (req, res) => {
  return res.send(await authorService.findAll());
});

router.get("/:id", async (req, res) => {
  return res.send(await authorService.findById(req.params.id));
});

router.post("/", async (req, res) => {
  const author = await authorService.findByName(req.body.name);
  if (author) return res.status(409).json({ message: "Author already exists" });

  const createdAuthor = await authorService.save(req.body.name);
  return res
    .status(201)
    .json({ message: "Author created successfully", author: createdAuthor });
});

router.put("/:id", async (req, res) => {
  const author = await authorService.findById(req.params.id);
  if (!author)
    return res.status(400).json({ message: "Author does not exist" });

  const updatedAuthor = await authorService.update(req.body.name);
  return res
    .status(200)
    .json({ message: "Author updated successfully", author: updatedAuthor });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const author = await authorService.findById(id);
  if (!author)
    return res.status(400).json({ message: "Author does not exist" });

  const deletedAuthor = await authorService.delete(id);
  return res
    .status(200)
    .json({ message: "Author successfully deleted", author: deletedAuthor });
});

module.exports = router;
