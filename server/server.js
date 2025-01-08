const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const quizModel = require('./models/quiz')
const db = require('./config/db')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/publish', async (req, res)=>{
  const {title, desc, quizes} =  req.body
  const newQuiz = await quizModel.create({
    title: {
      name: title.name,
      isBold: title.isBold,
      isUnderline: title.isUnderline,
      isItalic: title.isItalic
    },
    desc: {
      name: desc.name,
      isBold: desc.isBold,
      isItalic: desc.isItalic,
      isUnderline: desc.isUnderline,
    },
    quizes: [
      {quizes}
    ]
  })
  res.send("Quiz successfully published")
})

app.get('/sendQuizes', async(req, res)=>{
  try {
    const allQuizesMongo = await quizModel.find({});
    res.status(200).send(allQuizesMongo);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Error fetching quizzes from the database" });
  }
})

app.listen(3000)