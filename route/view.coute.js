const viewerCountFun = require("../controller/View.controller");
const view = (app) => {
  app.post("/", viewerCountFun);
};

module.exports = view;
