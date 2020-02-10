import React, { useContext } from 'react'

import QuizContext from '../context/QuizContext'

function Question(props) {
  const { state } = useContext(QuizContext)
  const { currentQuestion, questions } = state
  const question = questions[currentQuestion]
  return (
    <div className='question'>
      <h2>{question.question}</h2>
    </div>
  )
}

export default Question
