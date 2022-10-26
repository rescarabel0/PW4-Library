const express = require("express");
const router = express.Router();

const userService = require("../services/user-service");

router.post("/", async (req, res) => {
  const user = await userService.findByLogin(req.body.login);
  if (user) return res.status(409).json({ message: "Login already registered" });

  const createdUser = await userService.save(req.body.login, req.body.password);
  return res
    .status(201)
    .json({ message: "User created successfully", user: createdUser });
});

module.exports = router;
