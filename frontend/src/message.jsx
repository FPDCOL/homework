import React from 'react'
import {Link} from 'react-router-dom';

import './index.css'

GetMessage();{
    fetch('http://localhost:3000', {
            method: "GET",
        })
        .then(response => console.log(response))
        .then((response) => {
            console.log(response.data)
            this.setState({products: response.data});
}}


const MESSAGE = () => {
    return (
      <div style={{backgroundColor:'#36143d', display:'flex', flexDirection:'column',alignItems: 'center', height:'100vh'}}>
        <h2 className='fancy'> place holder</h2>
        <p></p>
        <Link to='/message'><button className='btn btn-primary mt-3 px-4 py-2 fancy'>close Card</button></Link>
      </div>
    )
  }
  
  export default MESSAGE