import { useState } from 'react'
import './App.css'
import HelloWorld from './components/HelloWorld'
import CustomComponents from './components/CustomComponents'
import LearnProps from './components/LearnProps'
function App() {
  const [count, setCount] = useState(0)
  let price = 300
  return (
    <>
      <h1>React+Django</h1>
      <HelloWorld />
      <CustomComponents />
      <LearnProps stock="Tesla" price={price} />
    </>
  )
}

export default App
