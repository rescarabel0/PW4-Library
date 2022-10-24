const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const db = require("./config/db");

const authService = require("./services/auth-service");

const authRouter = require("./routes/auth-router");
const userRouter = require("./routes/user-router");
const authorRouter = require("./routes/author-router");
const bookRouter = require("./routes/book-router");

// app.use(cors);

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/auth", authRouter);
app.use("/user", authService.authenticate, userRouter);
app.use("/author", authService.authenticate, authorRouter);
app.use("/book", authService.authenticate, bookRouter);

// app.get("/teste", authService.authenticate, (req, res) => {
//   res.send("hello");
// });

const port = 8888;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
