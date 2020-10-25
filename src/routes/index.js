const { createRouter } = require("../shared/utils/routes");
const TestRoutes = require("./Test");

module.exports.rootRoutes = {
  test: createRouter("/test", TestRoutes),
};
