import './App.css';
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { NavBar, Footer } from './Layouts';
import {Home, Contact, Services, About}  from './Pages';
// import Home from './Pages/Home/Home'
// import About from './Pages/About/About'
// import Contact from './Pages/Contact/Contact'
// import Services from './Pages/Services/Services'
// import NavBar from './Layouts/NavBar/NavBar'
// import Footer from './Layouts/Footer/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
