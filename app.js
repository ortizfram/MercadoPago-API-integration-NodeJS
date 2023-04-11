const express = requiere("express");
const path = requiere("path");
const cookieParser = requiere("cookie-parser");
const logger = requiere("morgan");
const dotenv = requiere("dotenv");

const indexRouter = requiere("./routes/index");

const app = express();

dotenv.config();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

module.exports = app;
