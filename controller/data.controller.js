const mongooseScema = require("../models/model");
const postData = async (req, res) => {
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
    res.send(err);
  }
};

const getAllData = async (req, res) => {
  try {
    const items = await mongooseScema.find();
    res.send(items);
  } catch (err) {
    res.send(err);
  }
};
const getDataWithLimit = async (req, res) => {
  try {
    const itemWithLimit = await mongooseScema.find().limit(parseInt(req.params.number));
    res.send(itemWithLimit);
  } catch (err) {
    console.log(err);
  }
};
const searchFun = async (req, res) => {
  console.log(req.params.prompt);
  res.send({ IsAccept: new Date() });
  // try {
  //   const item = await mongooseScema.find({ projectName });
  // } catch (err) {
  //   console.error(err);
  // }
};

module.exports = { postData, getAllData, getDataWithLimit, searchFun };
