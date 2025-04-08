const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.listen(8081, () => {
  console.log("server running on http://localhost:8081");
});
