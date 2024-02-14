import Container from "react-bootstrap/esm/Container";
import About from "./components/about/About";
import Home from "./components/home/Home";
import React, { useState } from 'react';
import Navbar from "./components/navbar/Navbar";
import Coach from "./components/coaches/Coach";
import Contact from "./components/contact/Contact";
import Tools from "./components/tools/Tools";
import Footer  from "./components/footer/Footer";
import Section from "./components/section/Section";
function App() {

  return (
  
    <Container>
    <div className="container">
      <div className="row">
          <Navbar/>
      </div>
    </div>

          <Home/>
          <Coach/>
         <About/>
         <Tools/>
         {/* <Contact/> */}
         <Section/>
         <Footer/>

 
 </Container>
  )
}

export default App ;
