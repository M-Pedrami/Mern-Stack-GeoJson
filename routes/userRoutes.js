const express = require("express");
const userRouter = express.Router();
const {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

userRouter.get("/", getUsers);

userRouter.post("/", addUser);

userRouter.get("/:id", getUser);

userRouter.put("/:id", updateUser);

userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
