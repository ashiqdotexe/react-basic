import { useState } from 'react'
import './App.css'
import HelloWorld from './components/HelloWorld'
import CustomComponents from './components/CustomComponents'
import LearnProps from './components/LearnProps'
import LearnEvent from './components/LearnEvent'
function App() {
  let price = 300
  return (
    <>
      <h1>React+Django</h1>
      <HelloWorld />
      <CustomComponents />
      <LearnProps stock="Tesla" price={price} />
      <LearnEvent />
    </>
  )
}

export default App
