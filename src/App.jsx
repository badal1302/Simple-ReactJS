import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionalComp from './FunctionalCompunctionalcomp'
import ClassComp from './ClassComplasscomp'
import LifecycleExample from './LifecycleExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h2>Hello in React appppp</h2>
      <LifecycleExample/>
      <FunctionalComp name1="Badal" loc="Dallas"/> 
        <hr width="1700px"></hr>
      <ClassComp name="Badal"/>
      </div>
    </>
  )
}

export default App
