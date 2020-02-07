import React from 'react'
import './App.scss'
import Progress from './components/Progress'
import Question from './components/Question'
import Answer from './components/Answer'

function App() {
  return (
    <div className='container'>
      <Progress total='3' current='1' />
      <Question question='What is React?' />
      <Answer letter='A' answer='Framework' />
    </div>
  )
}

export default App
