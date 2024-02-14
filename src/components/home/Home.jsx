import React from 'react'
import "./home.css"
import Button from "../Button/Button"
// Import our custom CSS
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap';
function Home() {
  return (   
<div className="home">
<div className="container  container-home">
     <div className="row ">
        <div className="text   col-lg-4 col-md-12 col-sm-12  "> 
          <span>Welcome to :</span>
    <h2 className='title-home-one'>The dream you want to achieve 
    lies in the work you are avoiding  </h2>
    <h2 className='title-home'> OX GYM</h2>
     {/* <p> Welcome to</p> */}
      <Button/>
      </div>
        <div className="col-lg-6 col-md-12 col-sm-12 "></div>
     </div>
   </div>
  

</div>
  )
}

export default Home ;