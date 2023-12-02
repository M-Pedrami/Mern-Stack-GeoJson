const express = require("express")
const app = express();
require("dotenv/config")
const PORT = process.env.PORT

app.get('/', (req, res)=>{
  res.send({message : "GET request sent"})
})

app.listen(PORT, ()=> console.log (`server listening on http://localhost:${PORT}`));