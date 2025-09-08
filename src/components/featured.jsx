import React from 'react'
import './featured.css'
import Hero from './hero'
import Testimonials from './testimonials'
import Products from './products'
import { Link } from 'react-router-dom'


const Featured = () => {
  return (

<>

    <div className="featured">

        <div className='feature-container'>

        <div className='feature-text'>
            <div className="title"><h1>Saftey On Your Hands</h1></div>
            <div className="info"><p>Your safety is our priority. We ensure the highest standards of safety in all our products.</p></div>
            <div className="buttons">
                <Link to="/services"><button>Know More</button></Link>
                <button style={{ background: '#f7b500' }}>Buy Now</button>
            </div>
            <div className="moreInfo">
              <p>Explore our range of safety gloves designed for maximum protection and comfort.</p>
              <ol>
                <li>Cut-resistant gloves</li>
                <li>Heat-resistant gloves</li>
                <li>Waterproof gloves</li>
                <li>Anti-vibration gloves</li>
              </ol>
            </div>
        </div>
        <div className='feature-item'>
            <img src="./images/featured2.jpg" alt="gloves"/>
        </div>

    </div>

        
    </div>
  
    <Hero/>
    
    <Products/>

    <Testimonials/>

    </>
  )
}

export default Featured
