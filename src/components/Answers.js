import React, { Fragment } from 'react'
import Answer from './Answer'

function Answers(props) {
  return (
    <Fragment>
      <Answer
        letter='a'
        answer={props.question.answer_a}
        selected={props.currentAnswer === 'a'}
        dispatch={props.dispatch}
      />
      <Answer
        letter='b'
        answer={props.question.answer_b}
        selected={props.currentAnswer === 'b'}
        dispatch={props.dispatch}
      />
      <Answer
        letter='c'
        answer={props.question.answer_c}
        selected={props.currentAnswer === 'c'}
        dispatch={props.dispatch}
      />
      <Answer
        letter='d'
        answer={props.question.answer_d}
        selected={props.currentAnswer === 'd'}
        dispatch={props.dispatch}
      />
    </Fragment>
  )
}

export default Answers
