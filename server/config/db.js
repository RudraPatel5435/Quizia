const mongoose = require('mongoose')

const connnect = mongoose.connect('mongodb+srv://rudranpatel0980:BewTjGfOWmW8rTt9@cluster0.svxof.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
  console.log("Connected to DB")
})

module.exports = connnect