const jwt = require("jsonwebtoken");
const UserService = require("./user-service");

const AuthService = {
  login: async (login, password) => {
    await UserService.save(login, password);
    const user = await UserService.findByLoginAndPassword(login, password);

    return user
      ? jwt.sign({ userId: user.id }, "my-private-key", {
          algorithm: "HS256",
          expiresIn: "1d",
        })
      : null;
  },
  authenticate: (req, res, next) => {
    const token = req.headers["Authorization"] || req.headers["authorization"];
    if (!token) return res.status(401).json({message: "Invalid authorization"});

    jwt.verify(
      token,
      "my-private-key",
      { algorithms: ["HS256"] },
      (err, decoded) => {
        if (err) return res.status(401).json({message: "Invalid authorization"});
        next();
      }
    );
    // next();
  },
};

module.exports = AuthService;
