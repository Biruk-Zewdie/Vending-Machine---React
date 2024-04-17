import React from 'react';
import "./Soda.css"
import { Link } from 'react-router-dom';


const Soda = () => {

  return (
    <div>
      <div className='Soda'>
        <h2>OMG Sugarrrrr </h2>
        <Link to="/">Go Back</Link>
      </div>
      <div className="chips-left">
      <img src="/images/coca-cola.jpeg" alt="coca-cola" />
      </div>
      <div className="chips-right">
      <img src="/images/gatorade.jpeg" alt="soda can" />
      </div>
    </div>
  )

}

export default Soda;