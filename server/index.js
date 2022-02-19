import express from 'express'
const app = express()
const PORT = 4000

// Body parsing middleware
app.use(express.json())

// Post request that compares answer to choice
// and returns the number of questions and total score
app.post('/', (req, res) => {
  try {
    let score = 0
    req.body.forEach(question => {
      if (question.answer === question.choice) score += 1
    })
    return res.status(202).json({"score": score})
  } catch (err) {
    return res.status(404).json({ message: 'Oh no! There has been an error!'})
  }
})

// Always listening
app.listen(PORT, () => {
  console.log(`We be quizzin' on port ${PORT}`)
})