const express = require("express");
const app = express();

const port = 3000;
const hostname = "localhost";

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Server running at http://${hostname}:${port}`);
});
