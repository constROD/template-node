const { useCreateRoute } = require("../shared/utils/routes");
const TestRoutes = require("./Test");

module.exports.rootRoutes = {
  test: useCreateRoute("/test", TestRoutes),
};
