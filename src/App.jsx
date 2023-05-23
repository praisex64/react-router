import React from 'react'; 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './About'; 
import Home from './Home'


function App() {
 
  return (
    <>
      
      <React.StrictMode>
     <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
    </>
  )
}

export default App
