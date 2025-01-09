import React from 'react'
import {Link} from 'react-router-dom';

import './index.css'

//get server message 

const MESSAGE = () => {
    return (
      <div style={{backgroundColor:'#36143d', display:'flex', flexDirection:'column',alignItems: 'center', height:'100vh'}}>
        <h2 className='mt-3 fancy' style={{marginTop:'50px'}}> Happy new year! </h2>
        <p className='fancy mt-2'>May it bring opurtunities and good fortune</p>
        <Link to='/letter'><button className='btn btn-primary mt-3 px-4 py-2 fancy'>Close Card</button></Link>
      </div>
    )
}
  
  export default MESSAGE;