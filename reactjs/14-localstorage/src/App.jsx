

const App = () => {

  const user={
    username:"shivam",
    age:20,
    city:'Dewas'
  }
  // localStorage.setItem('user',user) // it will not work because local storage only store string value
  localStorage.setItem('user',JSON.stringify(user))
  
  // json.stringify() is used to convert the object into string format so that it can be stored in local storage
  // json.parse() is used to convert the string format into object format so that it can be used in the application
  const User=JSON.parse(localStorage.getItem('user'));
  console.log(User)

  return (
    <div>

    </div>
  )
}

export default App
