import React from 'react'
import "./header.css";
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-img'>
      <div><img src="cloud-1.webp" alt="" /></div>
      <div><img src="cloud-2.png" alt="" width="250px"/></div>
      <div><img src="cloud-3.jpg" alt="" /></div>
      <div className='getStarted'>
        <div>
        <h3>
        So what are you waiting for
        </h3>
        
        <h6>Get Started now for</h6>
        <Button variant="outline-light" size='lg'>Free</Button>
        </div>
        </div>
      </div>
      <div className='header-hero'>
      <h1>Secure Your Data in the Cloud</h1>
      <br/>
        <p>Access your files anytime, anywhere with our reliable cloud storage solutions.
           Whether you're a professional, a student, or just someone who wants to keep their 
           memories safe, we have the perfect plan for you.</p>
        <br/>
        <p>Enjoy seamless file sharing, automatic backups, and robust security features designed
           to keep your data safe from unauthorized access. With our user-friendly interface,
            managing your files has never been easier.</p>
      </div>
    </div>
  )
}

export default Header