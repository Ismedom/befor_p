const mongooseViewSchema = require("../Models/View.model");

const viewerCountFun = async (req, res) => {
  try {
    const { deviceInformation, DeviceType } = req.body;
    const newView = mongooseViewSchema({
      deviceInformation,
      DeviceType,
    });

    await newView.save();
    const itemCount = await mongooseViewSchema.countDocuments();
    res.send({ itemCount });

    console.log(itemCount);
    // await mongooseViewSchema.deleteMany({});
  } catch (err) {
    console.log(err);
  }
};

module.exports = viewerCountFun;
