const express = require("express");
const cors = require("cors");
const app = express();
const connetDB = require("./connet");
const bodyParser = require("body-parser");
const router = require("./route/data.route");

app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

connetDB(listening);

router(app);

function listening() {
  app.listen(process.env.PORT || 3000, () => {
    console.log("server is running on port 3000");
  });
}
