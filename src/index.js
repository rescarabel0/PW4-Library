const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")

// const authService = require("./services/auth-service");

const authRouter = require("./routes/auth-router");
const userRouter = require("./routes/user-router");
const authorRouter = require("./routes/author-router");
const bookRouter = require("./routes/book-router");

app.use(cors({
    origin: "*"
}))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/author", authorRouter);
app.use("/book", bookRouter);

const port = 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
