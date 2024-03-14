const express = require("express");
const cors = require("cors");
const app = express();
const connetDB = require("./connet");
const mongooseScema = require("./model");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

connetDB(listening);

app.post("/", async (req, res) => {
  let indexCounter = (await mongooseScema.find()).length;
  try {
    const item = await mongooseScema.create({
      projectName: req.body.projectName,
      index: indexCounter + 1,
      gitHubSrc: req.body.gitHubSrc,
      productSrc: req.body.productSrc,
      explaination: req.body.explaination,
    });
    item
      .save()
      .then(() => res.send(item))
      .catch((e) => console.log(e));
  } catch (err) {
    console.log(err);
  }
});

app.get("/", async (req, res) => {
  try {
    const items = await mongooseScema.find();
    res.send(items);
  } catch (err) {
    console.log(err);
  }
});

function listening() {
  app.listen(process.env.PORT || 3000, () => {
    console.log("server is running on port 3000");
  });
}
