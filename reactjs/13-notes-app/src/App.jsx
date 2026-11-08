import { useState } from "react";


const App=()=>{

  const [title,setTitle]=useState('');
  const [details,setDetails]=useState('');
  const [task,setTask]=useState([]);


  const submitHandler=(e)=>{
    e.preventDefault();
    const copyTask=[...task];
    copyTask.push({title,details})

    setTask(copyTask);

    setTitle('')
    setDetails('')
  }
  const deleteNote=(idx)=>{
    
    const copyTask=[...task];
    copyTask.splice(idx,1);
    setTask(copyTask)    
  }
  return (
  <div className="h-full lg:flex  bg-black text-white">
    <form  onSubmit={(e)=>{
      submitHandler(e)
    }} className="flex items-start lg:w-1/2 gap-4  flex-col  p-10 ">
      <h1 className="text-3xl font-bold">Add Notes</h1>
     
     {/* first input */}
        <input 
      type="text" 
      placeholder="Enter notes Heading"
      className="px-5 py-2 font-medium w-full border-2 outline-none rounded"
      value={title}
      onChange={(e)=>{
        setTitle(e.target.value);
      }}
      />
      {/* second input */}
      <textarea
      type="text"
      className="px-5 h-32 font-medium py-2 w-full border-2 outline-none rounded"
      placeholder="Write Details"
      value={details}
      onChange={(e)=>{
        setDetails(e.target.value);
      }}
      />
      <button className="bg-white active:scale-95 font-medium text-black w-full outline-none px-5 py-2 rounded ">Add Notes</button>
     
      
    </form>
    <div className=" lg:w-1/2  p-10 lg:border-l-2 bg-gray-950">
      <h1 className="text-4xl font-bold">Recent Notes</h1>
      <div className="flex flex-wrap items-start justify-start mt-5 gap-5 h-full overflow-auto">
        {task.map(function(elem,idx){

          return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover px-4 py-9 rounded-xl text-black bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIr1xePGRer9KB-ttdSAAQnxwavmNqHORnPvBVdrf_bo9Sbrp0qd9ob3X6&s=10')]">
            
            <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
            <p className="mt-2 leading-tight font-medium text-gray-500 break-words whitespace-pre-wrap overflow-y-auto flex-1 min-h-0 w-full">{elem.details}</p>
            <button onClick={()=>{
              deleteNote(idx);
            }}
            className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 rounded font-bold text-white text-xs "
            >Delete</button>
          </div>
        })}
        
        
      </div>
    </div>
  </div>)
}
export default App;