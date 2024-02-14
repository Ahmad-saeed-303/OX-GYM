import React from 'react';
import "./section.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import sec from "../../assets/img/sec.jpg"
function Section() {
  return (
    <div className='section'>
      <div className="container">
        <div className="row">
             <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="row">
                <div className="sec-text col-lg-8 col-md-6 col-sm-12">
                    <p> welcome to </p>
                    <h1>  GYM   <b>XO </b></h1>
                    <span>Lorem ipsum dolor sit
                     amet consectetur, adipisicing elit.
                      Asperiores dolorem quasi quos sequi 
                      cumque nobis error repudiandae deserunt 
                      molestiae enim animi deleniti ratione
                       temporibus nemo veniam, 
                    aut corporis incidunt laborum!</span>
                </div>
                 </div>
                <div className="row">
                 
                <div className="sec-list col-lg-6 col-md-6 col-sm-12">
                
                 <ul>
                    <li> <ArrowForwardIosIcon/> 24-Hour Access </li>
                    <li> <ArrowForwardIosIcon/> Free </li>
                    <li> <ArrowForwardIosIcon/> 24-Hour Security </li>
                    <li> <ArrowForwardIosIcon/> HDTVs </li>
                    <li> <ArrowForwardIosIcon/> Private  </li>
                    <li> <ArrowForwardIosIcon/> Healthy </li>
                    <li> <ArrowForwardIosIcon/> World Wide Club Access </li>
                    
                  </ul>

                </div>
                <div className="sec-list col-lg-6 col-md-6 col-sm-12">
                
                 <ul>
                 <li> <ArrowForwardIosIcon/> 24-Hour Access </li>
                    <li> <ArrowForwardIosIcon/> Free </li>
                    <li> <ArrowForwardIosIcon/> 24-Hour Security </li>
                    <li> <ArrowForwardIosIcon/> HDTVs </li>
                    <li> <ArrowForwardIosIcon/> Private  </li>
                    <li> <ArrowForwardIosIcon/> Healthy </li>
                    <li> <ArrowForwardIosIcon/> World Wide Club Access </li>
                    
                  </ul>

                </div>
                
                 </div>
             </div>
             <div className=" col-lg-6 col-md-6 col-sm-12">
              <img src={sec} className='sec-img' alt="" /></div>
         </div>
      </div>
    </div>
  )
}

export default Section ;