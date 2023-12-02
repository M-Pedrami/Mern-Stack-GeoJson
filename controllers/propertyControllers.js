

const getProperties = async (req, res) => {
  res.send({message:"GET ALL Properties"})
};

const getProperty = async (req, res) => {
  res.send({ message: `Get property id : ${req.params.id}` });
};

const addProperty = async (req, res) => {
  res.status(201).send({ message: "property added" });
};

const updateProperty = async (req, res) => {
  res.send({ message: `prperty with the id ${req.params.id} updated` });
};

const deleteProperty = async (req, res) => {
  res.send({ message: `prperty with the id ${req.params.id} deleted` });
};

module.exports = {
  getProperties,
  getProperty,
  addProperty,
  updateProperty,
  deleteProperty,
};
