require("dotenv").config();
const express = require("express");
const { errors, notFound } = require("./handlers");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./models");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.use(notFound);

app.use(errors);

app.listen(PORT, () => {
  console.log(`App is Listening on ${PORT}`);
});
