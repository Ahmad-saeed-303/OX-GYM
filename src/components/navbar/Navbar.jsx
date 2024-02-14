import React from 'react'
import "./navbar.css"
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  ">
    <div className="container-fluid  ">
      <a className="navbar-brand " href="#">OX</a>
    <SportsGymnasticsIcon style={{fontSize:50 }}  className='icon-nav'/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          <a className="nav-link" href="#">Features</a>
          <a className="nav-link" href="#">Pricing</a>
          <a className="nav-link " >Disabled</a>
        </div>
      </div>
    </div>
  </nav>



    
  )
}

export default Navbar