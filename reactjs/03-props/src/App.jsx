import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
     <Card user="Shivam" age={21} img='https://images.unsplash.com/photo-1702149001693-67ca09997ecc?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>
     <Card user="Puneet" age={22} img='https://images.unsplash.com/photo-1792950941957-e475584fa405?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>
     <Card user="Sachin" age={20} img='https://plus.unsplash.com/premium_photo-1792767935840-a0d88e202ab8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>
      
    </div>
  )
}

export default App
