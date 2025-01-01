const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/', (req, res)=>{
  console.log(req.body)
  res.send("hello")
})

app.listen(3000)