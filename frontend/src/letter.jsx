import React from 'react'
import Lottie from 'lottie-react';
import {Link} from 'react-router-dom';
import animationData from './assets/newyears.json'
import 'bootstrap/dist/css/bootstrap.min.css';


const LETTER = () => {
  return (
    <div style={{backgroundColor:'#36143d', display:'flex', flexDirection:'column',alignItems: 'center', height:'100vh'}}>
      <div style={{maxWidth:'400px', width: '100%', justifyContent: 'center'}} > <Lottie animationData={animationData} loop={true} speed={0.1}/></div>
      <h2 className='mt-4'></h2>
      <p></p>
      <Link to='/message'><button className='btn btn-primary mt-3 px-4 py-2'>Open Card</button></Link>
    </div>
  )
}

export default LETTER