import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/features/counterSlice';

const App = () => {
  const [num ,setNum]=useState(0)
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button
      onClick={()=>dispatch(increment())}>
        Increment
      </button>
      <button 
      onClick={()=>dispatch(decrement())}>
        Decrement
      </button>
      <input 
      value={num}
      type='number'
      onChange={(e)=>{
        setNum(e.target.value);
      }}/>
      <button onClick={()=>dispatch(incrementByAmount(Number(num)))}>Increment by Amount</button>
    </div>
  )
}

export default App
