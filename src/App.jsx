import { createContext, useState } from 'react'
import './App.css'
import HelloWorld from './components/HelloWorld'
import CustomComponents from './components/CustomComponents'
import LearnProps from './components/LearnProps'
import LearnEvent from './components/LearnEvent'
import LearnLiftingStateUp from './components/LearnLiftingStateUp'
import LearnUseState from './components/LearnUseState'
import LearnCounterApp from './components/LearnCounterApp'
import LearnUseEffect from './components/LearnUseEffect'
import LearnUseMemo from './components/LearnUseMemo'
import ChildA from './components/ChildA'
import LearnUseRef from './components/LearnUseRef'
const StockContext = createContext()
const UserContext = createContext()
function App() {
  let price = 300
  let stock = "Tesla"
  const [user, setUser] = useState({ name: "Ashiqur Rahman", isLoggedIn: "Yes" })


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
      {/* <LearnUseState /> */}
      {/* <LearnCounterApp /> */}
      {/* <LearnUseEffect /> */}
      {/* <LearnUseMemo /> */}
      {/* <StockContext.Provider value={{ stock, price }}>
        <UserContext.Provider value={{ user, setUser }}>
          <ChildA />
        </UserContext.Provider>
      </StockContext.Provider> */}
      <LearnUseRef />
    </>
  )
}

export default App
export { StockContext, UserContext }
