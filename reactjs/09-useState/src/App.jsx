import  { useState } from 'react'

const App = () => {
  const [num, setNum]=useState(0);
   function increaseNum(){
    setNum(num+1);
    console.log("Increasing")
  }
   function decreaseNum(){
    setNum(num-1);
    console.log("Decreasing")

  }
  return (
    <div>
    <h1>{num}</h1>
    <button id="btn1" onClick={increaseNum}>Increase</button>
    <button id="btn2" onClick={decreaseNum}>Decrease</button>
  </div>
  )
}

export default App
