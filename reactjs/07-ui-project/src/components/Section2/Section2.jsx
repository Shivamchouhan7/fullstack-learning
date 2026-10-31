// import React from 'react'

import Navbar from "../Section1/Navbar"
import Page2Content from "./Page2Content"

const Section2 = (props) => {
  
  return (
    <div className='h-screen w-full bg-gray-800'>
      <Navbar/>
      <Page2Content solutions={props.solutions}/>
    </div>
  )
}

export default Section2
