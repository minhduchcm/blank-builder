const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve("build")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("build/index.html"));
});

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
app.listen(DEFAULT_PORT, err => {
  if (err) {
    throw err;
  }
  console.log(`Server running at http://locahost:${DEFAULT_PORT}/`);
});
