// import  { useState } from 'react'

const App = () => {
//1. Functional State Updates

// const [num, setNum]=useState(0);
// function changeNum(){
//   // setNum(num+1) normal change in use state 

//   //But if we write it multiple times like 
//   /*
//   setNum(num+1)
//   setNum(num+1)
//   setNum(num+1)

//   so according to it we might expect count to increase by 3, but it increases only by 1.
//   so for such cases Use functional updates whenever your new state depends on the previous state
//    */
//   setNum(prev=>prev+1)
//   setNum(prev=>prev+1)
//   setNum(prev=>prev+1)
//   // this updates the number by 3
// }

//2. Updating Objects in State

// const [user, setUser] = useState({
//     name: "Shivam",
//     age: 22,
//     city: "Indore"
// });
// function updateCity(){
//   // setUser({ city: "Bhopal" }); this is wrong as it changes whole object contwnt and replace it by city :Bhopal
  
//   // Correct approach: Spread Operator
//   setUser(prev => ({
//       ...prev,
//       city: "Bhopal"
//   }));
// }

// 3. Updating Nested Objects

// const [user, setUser]=useState({
//   name:"shivam",
//   address:{
//     city:"Indore",
//     state:"MP"
//   }
// })
// function updateUser(){
//   // If i want to update only the city.
//   setUser(prev=>({
//     ...prev,
//     address:{
//       ...prev.address,
//       city:"Bhopal"
//     }
//   }));

//   // **Important: Spread is shallow. You must copy each nested level that you want to update.

// }

// 4. Managing Arrays with useState

// In real applications, you'll frequently manage arrays using state.

// Example: Todo application.
// const [todos, setTodos] = useState([
//     { id: 1, title: "Learn React" },
//     { id: 2, title: "Learn Node.js" }
// ]);


// A. Adding an item
// function addTodo(){
//   setTodos(prev => [
//     ...prev,
//     { id: 3, title: "Learn MongoDB" }
// ]);
// }


// B. Removing an item
// function removeTodo(){
//   setTodos(prev =>
//     prev.filter(todo => todo.id !== 2)
// );
// }


// C. Updating an item
// function updateTodo(){
//   setTodos(prev =>
//     prev.map(todo =>//       
// todo.id === 1
//             ? { ...todo, title: "Master React" }
//             : todo
//     )
// );
// }


// D. Clearing all items
// function clearTodo(){
//   setTodos([]);
// }


// Remember: Don't directly mutate arrays stored in React state using push(), pop(), or splice().

//5. Lazy Initialization

// Suppose your initial state requires an expensive calculation.

// function expensiveCalculation(){
//   console.log("Calculating...");

//     let result = 0;

//     for (let i = 0; i < 1000000; i++) {
//         result += i;
//     }

//     return result;
// }
// Normal approach:
// const [count,setCount]=useState(expensiveCalculation()
// );
// Problem : Unnecessary calculation happens on every render.


// Best Approach:
// const [count,setCount]=useState(()=>expensiveCalculation());

// Benefit : Avoids unnecessary recalculation during re-renders.


// 6. State Batching

// React groups multiple state updates into a single render when possible.

// const [name,setName]=useState('Puneet')
// const [city,setCity]=useState('lalitpur')
// const [age,setAge]=useState(21)

// function changeUser(){
//   setName("Shivam"),
//   setCity("Indore"),
//   setAge(22)
// }

//7. State as a Snapshot
// const [count,setCount]=useState(0);
// function incCount(){
//   setCount(count+5);
//   console.log(count);
  /*
  What will the console print?

  It prints the old value, not the updated value.

  Why?

  React state behaves like a snapshot for each render. Calling a setter schedules an update; it doesn't change the state variable inside the currently executing function.
  */
// }


// 8. Boolean State for UI Management
/*This is commonly used in real-world React applications.

Examples:
- Opening and closing modals.
- Showing and hiding passwords.
- Displaying dropdowns.
- Toggling menus.
- Showing loading states.
Example: Password visibility.*/

// function PasswordInput() {
//     const [showPassword, setShowPassword] = useState(false);

//     return (
//         <div>
//             <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter password"
//             />

//             <button
//                 onClick={() => setShowPassword(prev => !prev)}
//             >
//                 {showPassword ? "Hide" : "Show"}
//             </button>
//         </div>
//     );
// }
  return (
// 1.

    // <div>
    //   <h1>{num}</h1>
    //   <button onClick={changeNum}>
    //     click
    //   </button>
    // </div>

// 2.

    // <div>
    //         <h2>{user.name}</h2>
    //         <h3>{user.age}</h3>
    //         <h3>{user.city}</h3>

    //         <button
    //             onClick={updateCity}
    //         >
    //             Change City
    //         </button>
    //     </div>
    
    // 3.

    // <div>
    //         <h2>{user.name}</h2>
    //         <h3>{user.address.city}</h3>
    //         <h3>{user.address.state}</h3>

    //         <button
    //             onClick={updateUser}
    //         >
    //             Change City
    //         </button>
    //     </div>


  // 4.
  // <div>
  //   <h1>TODO</h1>
  //   <ul>{todos.map(ob=>(
  //     <li key={ob.id}>{ob.title}</li>
      
  //   ))}</ul>
  //   <button onClick={addTodo}>Add TODO</button>
  //   <button onClick={updateTodo}>Update TODO</button>
  //   <button onClick={removeTodo}>Remove TODO</button>
  //   <button onClick={clearTodo}>Clear TODO</button>
  // </div>

//5.
  // <div>
  //   <h3>{count}</h3>
  //   <button onClick={()=>setCount(count+1)}>Increament </button>
  // </div>

//6.
  // <div>
  //   <h3>{name}</h3>
  //   <h3>{age}</h3>
  //   <h3>{city}</h3>
  //   <button onClick={changeUser}>change user</button>
  // </div>

//7.
  // <div>
  //   <h3>{count}</h3>
  //   <button onClick={incCount}>Increament </button>
  // </div>

//8.
{/* <PasswordInput/> */}
  )
}

export default App
