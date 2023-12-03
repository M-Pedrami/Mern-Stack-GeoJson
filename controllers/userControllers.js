const User = require("../models/user");

const getUsers = async (req, res) => {
  try {
    const response = await User.find();
    res.json(response);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "oops...Something went wrong getting the users" });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await User.findById({ _id: id });
    if (response) {
      res.send(response);
    } else {
      res.status(500).send({ message: `No user found with the id of ${id}` });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "oops...something went wrong getting the user" });
    console.log(error);
  }
};

const addUser = async (req, res) => {
  const { email, name, phoneNumber } = req.body;
  try {
    const response = await User.create({ email, name, phoneNumber });
    res.send({ message: "New User Successfully added", newUser: response });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Oops...Something when wrong while creating a new user",
    });
  }
};

const updateUser = async (req, res) => {
  const { email, name, phoneNumber } = req.body;
  const { id } = req.params;
  try {
    const response = await User.findOneAndUpdate(
      { _id: id },
      { email, name, phoneNumber },
      { new: true }
    );
    res.send(response);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Oops...something went wrong updating the user" });
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await User.findByIdAndDelete({ _id: id });
    if (response) {
      res.send({
        message: `the user with the id pf ${id} successfully deleted`,
        reponse,
      });
    } else {
      res
        .status(500)
        .send({
          message: "No user found with the provided id. Delete Unsuccesful",
        });
    }
  } catch (error) {
    res.status(500).send("Oops, something went wrong deleting the user");
    console.log(error);
  }
};

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
