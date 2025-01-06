const mongoose = require('mongoose')

const connnect = mongoose.connect('mongodb://0.0.0.0/Quizia').then(()=>{
  console.log("Connected to DB")
})

module.exports = connnect