const User = require("../models/user");

const getUsers = async (req, res) => {
  try { 
    const response = await User.find()
    res.json(response);
  } catch (error) {
    console.log(error)
    res.status(500).send({message : "oops...Something went wrong"})
  }
};

const getUser = async (req, res) => {
  res.send({ message: `Get User id : ${req.params.id}` });
};

const addUser = async (req, res) => {
  res.status(201).send({ message: "User added" });
};

const updateUser = async (req, res) => {
  res.send({ message: `prperty with the id ${req.params.id} updated` });
};

const deleteUser = async (req, res) => {
  res.send({ message: `prperty with the id ${req.params.id} deleted` });
};

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
