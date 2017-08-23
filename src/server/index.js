import http from "http";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import path from "path";

import config from "./config";

const app = express();

app.use(compression());
app.use(morgan());
app.use(express.static(path.resolve("build/client")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("build/client/index.html"));
});

app.listen(config.PORT, err => {
  if (err) {
    throw err;
  }
  console.log(`Server running at http://locahost:${config.PORT}/`);
});
