const controller = require("../controller/data.controller");

function dataRouter(app) {
  app.get("/projects", controller.getAllData);
  app.post("/", controller.postData);
  app.get("/getwithLimit/:number", controller.getDataWithLimit);
  app.get("/items/search/:prompt", controller.searchFun);
}

module.exports = dataRouter;
