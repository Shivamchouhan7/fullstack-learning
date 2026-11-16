import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='flex justify-between bg-sky-400 px-8 py-4 items-center '>
      <h2 className='font-bold text-2xl'>Shiv-I-Am</h2>
      <div className='flex gap-10'>
        <Link className='text-lg font-medium' to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/about'>About</Link>
        <Link className='text-lg font-medium' to='/courses'>Courses</Link>
        <Link className='text-lg font-medium' to='/Product'>Product</Link>
        

      </div>
    </div>
  )
}

export default Navbar
