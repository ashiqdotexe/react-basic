import { useState } from 'react'
import './App.css'
import HelloWorld from './components/HelloWorld'
import CustomComponents from './components/CustomComponents'
import LearnProps from './components/LearnProps'
import LearnEvent from './components/LearnEvent'
import LearnLiftingStateUp from './components/LearnLiftingStateUp'
import LearnUseState from './components/LearnUseState'
function App() {
  let price = 300
  const sampleClick = (data) => {
    console.log(data)
  }
  return (
    <>
      {/* <h1>React+Django</h1>
      <HelloWorld />
      <CustomComponents />
      <LearnProps stock="Tesla" price={price} />
      <LearnEvent />
      <LearnLiftingStateUp sampleClick={sampleClick} /> */}
      <LearnUseState />
    </>
  )
}

export default App
