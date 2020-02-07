import React from 'react'

function Answer(props) {
  return (
    <div className='answer'>
      <button className='btn' value={props.letter}>
        <span className='letter'>{props.letter}</span> {props.answer}
      </button>
    </div>
  )
}

export default Answer
