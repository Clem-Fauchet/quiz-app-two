import React, { Fragment, useContext } from 'react'
import Answer from './Answer'

import QuizContext from '../context/QuizContext'

function Answers() {
  const { state, dispatch } = useContext(QuizContext)
  const { currentAnswer, currentQuestion, questions } = state
  const question = questions[currentQuestion]

  return (
    <Fragment>
      <Answer
        letter='a'
        answer={question.answer_a}
        selected={currentAnswer === 'a'}
        dispatch={dispatch}
      />
      <Answer
        letter='b'
        answer={question.answer_b}
        selected={currentAnswer === 'b'}
        dispatch={dispatch}
      />
      <Answer
        letter='c'
        answer={question.answer_c}
        selected={currentAnswer === 'c'}
        dispatch={dispatch}
      />
      <Answer
        letter='d'
        answer={question.answer_d}
        selected={currentAnswer === 'd'}
        dispatch={dispatch}
      />
    </Fragment>
  )
}

export default Answers
