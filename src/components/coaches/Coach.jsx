import React from 'react'
import "./coach.css"
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import coach1 from "../../assets/img/coach1.jpg"
import BasicRating from './Rating';
import { Link } from 'react-router-dom';
function Coach() {
  return (
    <div className='coach'>
     <div className="container">
<div className="row">
<h1 className='title-coach'>COACH </h1>
</div>   
 <div className="row">
    <div className="col-lg-3 col-md-12 col-sm-12">
        <Card className='card-coach' sx={{ maxWidth: 300,  maxHeight:300 }}>
      <img src={coach1} alt="" className='coach-one' />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Boykaa
        </Typography>
        <Typography variant="body2">
          {/* Lizards are a widespread group of squamate reptiles, with over 6,000 */}
        </Typography>
      </CardContent>
      <CardActions>
      <BasicRating/>
       {/* <Link to="../Coaches.jsx">  */}
        <Button size="small" className='coach-btn'>See More</Button>
        {/* </Link> */}
      </CardActions>
    </Card>
        </div>
    <div className="col-lg-3 col-md-12 col-sm-12">
        <Card className='card-coach' sx={{ maxWidth: 300,  maxHeight:300 }}>
      <img src={coach1} alt="" className='coach-one' />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Boykaa
        </Typography>
        <Typography variant="body2">
          {/* Lizards are a widespread group of squamate reptiles, with over 6,000 */}
        </Typography>
      </CardContent>
      <CardActions>
      <BasicRating/>
        {/* <Button size="small">Share</Button> */}
        <Button size="small" className='coach-btn'>See More</Button>
      </CardActions>
    </Card>
        </div>
    <div className="col-lg-3 col-md-12 col-sm-12">
        <Card className='card-coach' sx={{ maxWidth: 300,  maxHeight:300 }}>
      <img src={coach1} alt="" className='coach-one' />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Boykaa
        </Typography>
        <Typography variant="body2">
          {/* Lizards are a widespread group of squamate reptiles, with over 6,000 */}
        </Typography>
      </CardContent>
      <CardActions>
      <BasicRating/>
        {/* <Button size="small">Share</Button> */}
        <Button size="small" className='coach-btn'>See More</Button>
      </CardActions>
    </Card>
        </div>
    <div className="col-lg-3 col-md-12 col-sm-12">
        <Card className='card-coach' sx={{ maxWidth: 300,  maxHeight:300 }}>
      <img src={coach1} alt="" className='coach-one' />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Boykaa
        </Typography>
        <Typography variant="body2">
          {/* Lizards are a widespread group of squamate reptiles, with over 6,000 */}
        </Typography>
      </CardContent>
      <CardActions>
      <BasicRating/>
        {/* <Button size="small">Share</Button> */}
        <Button size="small" className='coach-btn'>See More</Button>
      </CardActions>
    </Card>
        </div>

       
    </div></div>
    </div>
  )
}

export default Coach