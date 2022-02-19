import React from 'react'
import axios from 'axios'
import jsonData from './data/data.js'
import logo from './assets/logo.png'

function App() {
  const [questionData, setQuestionData] = React.useState(jsonData)
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const [results, setResults] = React.useState(null)

  const choiceHandler = (e) => {
    // Adds choice to questionData and sets in state
    const newArray = [...questionData]
    newArray[currentQuestion].choice = e.target.value.toLowerCase()
    setQuestionData(newArray)

    // Proceeds to next question unless quiz over
    if (currentQuestion < questionData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      handleSubmit()
    }
  }

  // Sends post request to backend, recieves results
  const handleSubmit = async () => {
    const { data } = await axios.post('/', questionData)
    console.log(data)
    setResults(data)
  }

  // Resets state, restarts quiz
  const restartQuiz = async () => {
    setCurrentQuestion(0)
    setResults(null)
  }

  return (
    <div className="flex-container">
      <img id="logo" src={logo} alt="Mind Gym Logo" />
      <div className="content">
        {!results ? (
          <>
            <h2>{questionData[currentQuestion].question}</h2>
            <div className="question-container">
              {questionData[currentQuestion].options.map((option) => (
                <button
                  className="button"
                  key={option.id}
                  value={option.id}
                  onClick={choiceHandler}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2>
              You have scored {results.score} out of a possible{' '}
              {questionData.length}
            </h2>
            {results.score < 2 ? (
              <h2>Better luck next time!</h2>
            ) : (
              <h2>Great job!</h2>
            )}
            <button className="button" onClick={restartQuiz}>
              Try again?
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default App
