// hooks 
import { useState } from 'react'

function App() {

  // hooks6
  let [counter, setCounter]= useState(0)
  
  const addValue = () =>{
    if(counter<20)
    {
    counter = counter + 1;
    setCounter(counter)
    }
    else{
      counter = 20;
      setCounter(counter)
    }
  }

  
  const removeValue = () =>{
    if(counter>=1)
    {
    counter = counter - 1;
    setCounter(counter)
    }
    else{
      counter =0;
      setCounter(counter)
    }
  }

  return (
    <>
    <h1>Welcome to de3wan Classroom</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>Add value </button>
    <br />
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
