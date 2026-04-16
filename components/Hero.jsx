import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div>
       
     <div className='hero-search'>
        <h1>Find The Perfect Rental</h1>
        <p>Discover the perfect property that suits your need.</p>
        <form>
            <input type='text' placeholder='Enter location' />
            <select>
                <option>All</option>
            </select>
            <button className='search-btn'>Search</button>
        </form>
        
     </div>
    </div>
  )
}

export default Hero
