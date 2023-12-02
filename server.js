const express = require("express");
const app = express();
require("dotenv/config");
const PORT = process.env.PORT;
const mongoose = require('./database/db')
const cors = require("cors");
const userRouter = require("./routes/userRoutes");

//Middlewares

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);

app.listen(PORT, () =>
  console.log(`server listening on http://localhost:${PORT}`)
);
