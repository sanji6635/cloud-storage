import React from 'react'
import "./profile.css" ;
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
    <div className='profile'>
        <div className='profile-dashboard'>
          <h5>
          <Link  to="/profile/dashboard" style={{textDecoration: "none",color:"white"}} >Dashboard</Link>
          </h5>
          <h5>
          <Link  to="/images" style={{textDecoration: "none",color:"white"}} >Images</Link>
          </h5>
          <h5>
          <Link  to="/videos" style={{textDecoration: "none",color:"white"}} >Videos</Link>
          </h5>
          <h5>
          <Link  to="/files" style={{textDecoration: "none",color:"white"}} >Files</Link>
          </h5>
          <h5>
          <Link  to="/notes" style={{textDecoration: "none",color:"white"}} >Notes</Link>
          </h5>
        </div>
    </div>
    </>
  )
}

export default Profile