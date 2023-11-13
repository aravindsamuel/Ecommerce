import React from 'react'
import { Link } from 'react-router-dom'


function FamousCard({famlink, famimg, famtitle, famsub}) {
  return (
    <>  
    <Link to={famlink} className="famous-product-container">
        <div className='famouscard-content'>
            <h5 className="famouscard-body text-dark">{famtitle}</h5>
            <p className="famouscard-desc text-dark">{famsub}</p>
        </div>
        <div className='text-center'>
            <img className='famous-img img-fluid' src={famimg} alt="famous products" />
        </div>
    </Link>   
    </>
  )
}

export default FamousCard