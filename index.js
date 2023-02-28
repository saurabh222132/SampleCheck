const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3001;
app.get("/", (req, res) => {
  res.send("This is the '/' this route ");
});
app.get("/data", (req, res) => {
  res.send("Hello from server");
});

app.listen(port, () => console.log("server started"));
