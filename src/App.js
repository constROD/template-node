const express = require("express");
const useRoutes = require("./routes");

const app = express();

// Routes
const { test } = useRoutes();

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
