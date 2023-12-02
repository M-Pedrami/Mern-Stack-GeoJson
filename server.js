const express = require("express");
const app = express();
require("dotenv/config");
const PORT = process.env.PORT;
const mongoose = require('./database/db')
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const propertyRouter = require("./routes/propertyRoutes")

//Middlewares

app.use(cors());
app.use(express.json());

//Routers
app.use("/users", userRouter);
app.use("/properties", propertyRouter);


app.listen(PORT, () =>
  console.log(`server listening on http://localhost:${PORT}`)
);
