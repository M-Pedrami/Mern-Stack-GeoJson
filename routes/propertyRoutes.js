const express = require("express");
const propertyRouter = express.Router();
const {
  getProperties,
  getProperty,
  addProperty,
  updateProperty,
  deleteProperty,
} = require("../controllers/propertyControllers")

propertyRouter.get("/", getProperties);

propertyRouter.post("/", addProperty);

propertyRouter.get("/:id", getProperty);

propertyRouter.put("/:id", updateProperty);

propertyRouter.delete("/:id", deleteProperty);

module.exports = propertyRouter