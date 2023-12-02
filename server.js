const express = require("express");
const app = express();
const cors = require("cors");
const propertyRouter = require("./routes/propertyRoutes");
require("dotenv/config");
const PORT = process.env.PORT;

//Middlewares

app.use(cors());
app.use(express.json());

app.use("/properties", propertyRouter);

app.listen(PORT, () =>
  console.log(`server listening on http://localhost:${PORT}`)
);
