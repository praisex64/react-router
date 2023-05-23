import React from 'react'; 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './pages/About'; 
import Home from './pages/Home'
import Vans from './pages/Vans'
import "../server"


function App() {
 
  return (
    <>
      
      <React.StrictMode>
     <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/vans">Vans</Link>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} /> 
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
    </>
  )
}

export default App
