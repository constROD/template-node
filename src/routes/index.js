const { createRouter } = require("../utils/routes");
const TestRoutes = require("./Test");

module.exports = {
  test: createRouter("/test", TestRoutes),
};
