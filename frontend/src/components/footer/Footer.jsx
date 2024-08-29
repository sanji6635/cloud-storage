import React from 'react'
import "./footer.css" ;
import { FaGoogleDrive } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { PiGoogleChromeLogoBold } from "react-icons/pi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { SiTwitch } from "react-icons/si";


const Footer = () => {
  return (
    <div className='footer'>
      <div><FaGoogleDrive/></div>
      <div><FcGoogle/></div>
      <div><PiGoogleChromeLogoBold/></div>
      <div><FaFacebookSquare/></div>
      <div><FaFacebookMessenger/></div>
      <div><FaDiscord/></div>
      <div><FaInstagramSquare/></div>
      <div><SiTwitch/></div>
      <div><IoLogoTwitter/></div>
    </div>
  )
}

export default Footer