import React from 'react'
import './about.css';
import about from "../../assets/img/home.jpg"
function About() {
  return (
<div className="about">
<div className="container ">
<div className="row">
<div className="col-lg-6 col-md-12 col-sm-12  ">
    <img src={about} alt="" className='img-about' />
  </div>
  <div className=" text-about col-lg-5 col-md-12 col-sm-12">
 <div >
  <span> about us</span>
  <h1> BEST BOXING SCHOOL AND MARTIAL ARTS SINGE 2022   </h1>
           <span> Lorem, ipsum dolor sit amet
            consectetur adipisicing elit.
             Distinctio aut dolore cumque 
             libero fuga. Non molestiae, 
             beatae minus asperiores, cupiditate, veritatis quos qui sed dolorum
            inventore possimus eos hic esse?</span><p></p>
            <button className='btn-about-one'> # NICE BUTTON</button>    
            <button className='btn-about-tow'> # NICE BUTTON</button>    
  </div>
 </div>

</div>
    
</div>
</div>
  )
}

export default About ;

