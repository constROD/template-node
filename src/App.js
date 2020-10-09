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

module.exports = app;
