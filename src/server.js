const express = require("express");
const https = require("https");
const fs = require("fs");

/* Configs */
const { PORT, ZONE } = require("./configs/app");

/* Routes */
const { test } = require("./routes");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(test.path, test.routes);

if (ZONE === "production") {
  const sslCertificates = {
    key: fs.readFileSync("/path/to/key"),
    cert: fs.readFileSync("/path/to/cert"),
    ca: fs.readFileSync("/path/to/ca"),
  };

  https
    .createServer(sslCertificates, app)
    .listen(PORT, () => console.log("Listening on port: " + PORT));
} else {
  app.listen(PORT, () => console.log("Listening on port: " + PORT));
}
