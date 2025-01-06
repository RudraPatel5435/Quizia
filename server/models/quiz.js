const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
  title: {
    name: String,
    isBold: Boolean,
    isUnderline: Boolean,
    isItalic: Boolean
  },
  desc: {
    name: String,
    isBold: Boolean,
    isUnderline: Boolean,
    isItalic: Boolean
  },
  quizes: {type:Array} 
})

const quizModel = mongoose.model('quiz', quizSchema)

module.exports = quizModel