import React from 'react'

function Answer(props) {
  let classes = ['answer']

  if (props.selected) {
    classes.push(' selected')
  }
  return (
    <div>
      <button
        className='btn'
        className={classes.join('')}
        value={props.letter}
        onClick={props.handleClick}
      >
        <span className='letter'>{props.letter}</span> {props.answer}
      </button>
    </div>
  )
}

export default Answer
