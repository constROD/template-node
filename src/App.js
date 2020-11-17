const express = require("express");
const { rootRoutes } = require("./routes");

const app = express();

// Routes
const { test } = rootRoutes;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use(test.path, test.routers);

module.exports = app;
