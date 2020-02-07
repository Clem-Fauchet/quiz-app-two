import React from 'react'

function Progress(props) {
  return (
    <div className='progress'>
      <h3>
        Question {props.current} of {props.total}{' '}
      </h3>
    </div>
  )
}

export default Progress
