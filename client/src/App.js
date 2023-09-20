import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./compontents/Navbar";
import Home from "./compontents/Home";
import About from "./compontents/About";
import Portfolio from "./compontents/Portfolio";
import Technical from "./compontents/Technical";
import Login from "./compontents/Login";
import Contact from "./compontents/Contact";
import Register from "./compontents/Register";
import Errorpage from "./compontents/errorpage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/technical" element={<Technical />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/*" element={<Errorpage/>}/>

      </Routes>
    </Router>
  );
}

export default App;