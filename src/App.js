import React from "react";
import Scroll from "react-scroll-to-top";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Career from "./Components/Career";
import About from "./Components/About";
import Home from "./Components/Home";
import Lowbar from "./Components/Lowbar";
import Product from "./Components/Product";


function App() {
  return (
    <>
      
      <Router>
        
        <Scroll
          color="white"
          style={{ backgroundColor: "black", opacity: ".5" }}
        />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="About" element={<About/>}></Route>
          <Route exact path="Career" element={<Career/>}></Route>
          <Route exact path="Product" element={<Product/>}></Route>
        </Routes>
        
      </Router>
      <Lowbar/>
    </>
  );
}

export default App;
