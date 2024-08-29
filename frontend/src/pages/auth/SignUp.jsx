
import {Link} from "react-router-dom" ;
import React, { useState } from 'react' ;
import "./auth.css" ;
import {toast} from "react-hot-toast"
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [email , setEmail] = useState("") ;
  const [password , setPassword] = useState("") ;
  const [confirmPassword , setConfirmPassword] = useState("") ;

  const {signup} = useSignup()
  //form handling
  const handleSubmit = async(e)=>{
    e.preventDefault() ;
    console.log(email,password)

    //signup hook
    await signup(email , password ,confirmPassword) ;
  }


  return (
    <div className='signup-page'>
    <div className='signup'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} >
        <label>Email</label>
        <br/>
        <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <br/>
        <label>Password</label>
        <br/>
        <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <br/>
        <label>Confirm Password</label>
        <input type="text" name="confirmPassword" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} />
        <br/>
        <button type="submit"  className='submit' >
          Sign up
        </button>
        <i>already have an account ? 
          <Link to="/login" style={{textDecoration:"none"}}>Login</Link>
        </i>
      </form>
    </div>
    </div>
  )
}

export default SignUp

