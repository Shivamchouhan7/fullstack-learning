import Menu from './Menu.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Login from './Login.jsx';
import Contact from './Contact.jsx';
import Booking from './Booking.jsx';
import {  Routes, Route } from 'react-router-dom';
export default function App(){
  return (
    <div>
      <div className="container-fluid">
        <main className="tm-main">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/booking" element={<Booking/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
            <Menu />

            <footer className="row tm-row">
                <hr className="col-12"/>
                <div className="col-md-6 col-12 tm-color-gray">
                    Design: <a rel="nofollow" target="_parent" href="https://templatemo.com" className="tm-external-link">Design By Shivam with ❤️</a>
                </div>
                <div className="col-md-6 col-12 tm-color-gray tm-copyright">
                    Copyright 2026 MediSync Healthcare 
                </div>
            </footer>
        </main>
    </div>
    </div>
  )
}
