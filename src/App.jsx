import { useState } from 'react'
import './App.css'
import HelloWorld from './components/HelloWorld'
import CustomComponents from './components/CustomComponents'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React+Django</h1>
      <HelloWorld />
      <CustomComponents />
    </>
  )
}

export default App
