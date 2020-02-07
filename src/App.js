import React from 'react'
import './App.scss'
import Progress from './components/Progress'

function App() {
  return (
    <div className='container'>
      <Progress total='3' current='1' />
    </div>
  )
}

export default App
