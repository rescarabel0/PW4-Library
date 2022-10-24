const express = require("express");
const router = express.Router();

const authService = require("../services/auth-service");

router.post("/", async (req, res) => {
  const token = await authService.login(req.body.login, req.body.password);
  return token
    ? res.status(200).json({
        token,
        expiresIn: 1000 * 60 * 60 * 24,
      })
    : res.status(401).json({message: "Invalid authorization"});
});

module.exports = router;
