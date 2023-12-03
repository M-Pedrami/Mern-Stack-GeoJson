const Property = require("../models/property");

const getProperties = async (req, res) => {
  try {
    const response = await Property.find();
    res.json(response);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Oops, Something went wrong getting all properties" });
    console.log(error);
  }
};

const getProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Property.findById({ _id:id }).populate("owner");
    if (response) {
      res.send(response);
    } else {
      res.send({ message: `No property found with the id of ${id}` });
    }
  } catch (error) {
    res.status(500).send({
      message: "Oops, something went wrong getting the property you asked for",
    });
    console.log(error);
  }
};

const addProperty = async (req, res) => {
  try {
    const { title, description, price, bedrooms, area, image, images, owner, availability } =
      req.body;
    const response = await Property.create({
      title,
      description,
      price,
      bedrooms,
      area,
      image,
      images,
      owner,
      availability
    });
    res.send(response);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Oops...something went wrong adding the property" });
  }
};

const updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, bedrooms, area, image, images, owner, availability } =
      req.body;
    const response = Property.findByIdAndUpdate(
      { _id: id },
      { title, description, price, bedrooms, area, image, images, owner, availability },
      { new: true }
    );
    if (response) {
      res.send(response);
    } else {
      res.status(500).send({ message: "The Id you provided is invalid" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Something went wrong updating the property" });
    console.log(error);
  }
};

const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const response = Property.findByIdAndDelete({ _id: id });
    res.send({
      message: `the property with the id of ${id} got deleted`,
      response,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "something went wrong deleting the property" });
    console.log(error);
  }
};

module.exports = {
  getProperties,
  getProperty,
  addProperty,
  updateProperty,
  deleteProperty,
};
