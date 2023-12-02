const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTION_STRING);

console.log(process.env.CONNECTION_STRING)