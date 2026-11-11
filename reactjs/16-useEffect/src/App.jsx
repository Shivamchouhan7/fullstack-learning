import  { useEffect, useState } from 'react'

const App = () => {
  const [a, setA]=useState(0);
  const [b, setB]=useState(0);

  function aChange(){
    console.log("value of a has changed");
    
  }
  function bChange(){
    console.log("value of b has changed");
    
  }
  useEffect(function(){
    aChange();
    console.log('use effect is running for A');
    
  },[a]) //useEffect will run only when a changes, not b. If you want to run useEffect when b changes, you can add b in the dependency array like this [a,b]

  useEffect(function(){
    bChange();
    console.log('use effect is running for B');
    
  },[b])
  return (
    <div>
      <h1>a is {a}</h1>
      <h1>b is {b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }}>change A</button>
      <button onClick={()=>{
        setB(b-1)
      }}>change B</button>
    </div>
  )
}

export default App
