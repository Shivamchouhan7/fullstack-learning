import axios from 'axios'
import { useState } from 'react';

const App = () => {

  const [data,setData]=useState([])

  const getData=async()=>{
    //const response = await fetch('https://jsonplaceholder.typicodeom/posts');
  
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setData(response.data)
  }
  return (
    <div>
      <button onClick={getData}>Get data</button>
      <div>
        {data.map((elem,idx)=>{
          return <h3>{idx} : {elem.title}</h3>
        })}
      </div>
    </div>
  )
}

export default App
