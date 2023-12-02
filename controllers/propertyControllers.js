const getProperties = (req, res) => {
  res.send({ message: "GET Properties REQUEST" });
};

const getProperty = (req, res) => {
  res.send({ message: `Get property id : ${req.params.id}` });
};

const addProperty = (req, res) => {
  res.status(201).send({ message: "property added" });
};

const updateProperty = (req, res) => {
  res.send({ message: `prperty with the id ${req.params.id} updated` });
};

const deleteProperty = (req, res) => {
  res.send({ message: `prperty with the id ${req.params.id} deleted` });
};

module.exports = {
  getProperties,
  getProperty,
  addProperty,
  updateProperty,
  deleteProperty
}