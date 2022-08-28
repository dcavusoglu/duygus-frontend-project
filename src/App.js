import './App.css';
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { NavBar, Footer } from './Layouts';
import {Home, Contact, Services, About, SingleProduct, EditProduct}  from './Pages';
// import Home from './Pages/Home/Home'
// import About from './Pages/About/About'
// import Contact from './Pages/Contact/Contact'
// import Services from './Pages/Services/Services's
// import NavBar from './Layouts/NavBar/NavBar'
// import Footer from './Layouts/Footer/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} className='home-body'/>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route path='/products/edit/:id' element={<EditProduct />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
