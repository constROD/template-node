const { createRouter } = require("../shared/utils/routes");
const TestRoutes = require("./Test");

module.exports = {
  test: createRouter("/test", TestRoutes),
}