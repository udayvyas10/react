import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  let [message, setMessage] = useState("")

  // let counter = 15

  const addValue = () => {
    console.log("clicked", counter);
    // counter = counter + 1
    setCounter(counter +1)
    }

  const removeValue = () => {
    if (counter > 0) {
    setCounter (counter - 1)  
    setMessage("")
    } else {
      setMessage ("cannot be less than zero")
    }
    
  }
 
  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter value :{counter} </h2>

      <button
      onClick={addValue}>Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}>Drecrease Value: {counter}</button>
      <p>message: {message}</p>
      <p>footer :{counter}</p>
    </>
  )
}

export default App
