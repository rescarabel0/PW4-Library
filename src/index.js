const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const i18n = require("i18n-express");

const authService = require("./services/auth-service");

const authRouter = require("./routes/auth-router");
const userRouter = require("./routes/user-router");
const authorRouter = require("./routes/author-router");
const bookRouter = require("./routes/book-router");

app.use(i18n);

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/auth", authRouter);
app.use("/user", authService.authenticate, userRouter);
app.use("/author", authService.authenticate, authorRouter);
app.use("/book", authService.authenticate, bookRouter);

const server = app.listen(() => {
  console.log(`Listening on port ${server.address().port}`);
});
