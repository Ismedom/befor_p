const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const connetDB = require("./utils/connectBeginnerProjectCollection");
const connectView = require("./utils/connectView");
const bodyParser = require("body-parser");
const router = require("./route/data.route");
const view = require("./route/view.coute");

app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

router(app);
view(app);

connectView();
connetDB();

function listening() {
  app.listen(process.env.PORT || 3000, () => {
    console.log("server is running on port 3000");
  });
}
listening();
