import http from "http";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";

import config from "./config";

const app = express();

app.use(compression());
app.use(morgan());

app.use((req, res) => {
  res.json({ messages: "HelloWorld!!!" });
});

app.listen(config.PORT, err => {
  if (err) {
    throw err;
  }
  console.log(`Server running at http://locahost:${config.PORT}/`);
});
