import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
    <div className='hero'>
        <div>
          <img src="cloud-6.jpg" alt="" />
          <h3>
            Personalized Dashboard
          </h3>
        </div>
        <div id="param2">
        <img src="cloud-5.jpg" alt="" />
        <h3>
        Easy To Manage
        </h3>
        </div>
        <div>
        <img src="cloud-8.jpg" alt="" />
        <h3>
        Anytime Anywhere
        </h3>
        </div>
    </div>
  )
}

export default Hero