import {Link} from "react-router-dom" ;
import React, { useState } from 'react' ;
import "./auth.css" ;
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("") ;
  const [password, setPassword] = useState("") ;
  const {login} = useLogin() ;


  const handleSubmit = async (e)=>{
    e.preventDefault() ;
    console.log(email,password) ;
    
    await login(email,password) ;
  }

  return (
    <div className='login-page'>
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <br/>
        <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <br/>
        <label>Password</label>
        <br/>
        <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <br/>
        <br/>
        <button type="submit" className='submit' value="Login">
          Login
        </button>
        <i>already have an account ? 
          <Link to="/signup" style={{textDecoration:"none"}}>Sign up</Link>
        </i>
      </form>
    </div>
    </div>
  )
}

export default Login