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
  const {email, name, phoneNumber} = req.body;
  try {
    const response = await User.create({email, name, phoneNumber})
    res.send({message: "New User Successfully added", newUser : response})
  } catch (error) {
    console.log(error)
    res.status(500).send({message : "Oops...Something when wrong while creating a new user"})
  }
};

const updateUser = async (req, res) => {
  const {email, name, phoneNumber} = req.body;
  const {id} = req.params;
  try {
    const response = await User.findOneAndUpdate({_id: id}, {email, name, phoneNumber}, {new: true});
    res.send(response)
  } catch (error) {
    res.status(500).send({message: "Oops...something went wrong updating the user"})
    console.log(error)
  }
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
