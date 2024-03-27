const controller = require("../controller/data.controller");

function dataRouter(app) {
  app.get("/", controller.getAllData);
  app.post("/", controller.postData);
  app.get("/getwithLimit/:number", controller.getDataWithLimit);
}

module.exports = dataRouter;
