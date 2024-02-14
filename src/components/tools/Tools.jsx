import React from 'react'
import "./tools.css";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AlarmIcon from '@mui/icons-material/Alarm';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
function Tools() {
  return (
    <div className="tools">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 card-tool">
                    <h1><FitnessCenterIcon  className='tool-icon'/> </h1>
                    <h2>Dumbbell  </h2>
                    <p>Lorem ipsum dolor sit amet
                     consectetur adipisicing elit
                     . Non accusamus, cumque atque
                      aliquid porro natus, fugiat 
                      possimus quam animi modi temporibus
                       saepe minus 
                    amet illum incidunt nisi
                     vel, et suscipit.</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 card-tool">
                    <h1><ElectricBoltIcon  className='tool-icon'/> </h1>
                    <h2>Dumbbell  </h2>
                    <p>Lorem ipsum dolor sit amet
                     consectetur adipisicing elit
                     . Non accusamus, cumque atque
                      aliquid porro natus, fugiat 
                      possimus quam animi modi temporibus
                       saepe minus 
                    amet illum incidunt nisi
                     vel, et suscipit.</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 card-tool">
                    <h1><AlarmIcon  className='tool-icon'/> </h1>
                    <h2>Dumbbell  </h2>
                    <p>Lorem ipsum dolor sit amet
                     consectetur adipisicing elit
                     . Non accusamus, cumque atque
                      aliquid porro natus, fugiat 
                      possimus quam animi modi temporibus
                       saepe minus 
                    amet illum incidunt nisi
                     vel, et suscipit.</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 card-tool">
                    <h1><AssuredWorkloadIcon  className='tool-icon'/> </h1>
                    <h2>Dumbbell  </h2>
                    <p>Lorem ipsum dolor sit amet
                     consectetur adipisicing elit
                     . Non accusamus, cumque atque
                      aliquid porro natus, fugiat 
                      possimus quam animi modi temporibus
                       saepe minus 
                    amet illum incidunt nisi
                     vel, et suscipit.</p>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Tools ;