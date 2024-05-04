import React, { useEffect,useState } from "react";
import fetch from 'node-fetch';
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'
import Navbar from "./Navbar";

const Login=()=>{

  const [values,setValues] = useState({
    username : '',
    password : ''
  })

const navigate= useNavigate()
axios.defaults.withCredentials = true;

// useEffect(()=>{
//   axios.get('http://localhost:3001')
//   .then(res=>{
//       if(res.data.valid){
//           navigate('/')
//       }
//       else{
//           navigate('/login')
//       }
//   })
// })

const handleSubmit=(event)=>{
  event.preventDefault();
  axios.post('http://localhost:3001/loginUser',values)
  .then(res=> 
    {
    if(res.data.Status === "Success"){
      navigate('/')
    }
    else{
      alert("error occured while logging in");
    }
    console.log(res);
 }

  )
  .then(err=> console.log(err));
}
    return(
        <>
            <div className="form-align">
                    <form onSubmit={handleSubmit} class="form_main">
                            <p class="heading">Login</p>
                            <div class="inputContainer">
                                <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 23 23">
                                <path d="M12,2a10,10,0,1,0,5,18.66,1,1,0,1,0-1-1.73A8,8,0,1,1,20,12v.75a1.75,1.75,0,0,1-3.5,0V8.5a1,1,0,0,0-1-1,1,1,0,0,0-1,.79A4.45,4.45,0,0,0,12,7.5,4.5,4.5,0,1,0,15.3,15,3.74,3.74,0,0,0,22,12.75V12A10,10,0,0,0,12,2Zm0,12.5A2.5,2.5,0,1,1,14.5,12,2.5,2.5,0,0,1,12,14.5Z"></path>
                                </svg>
                               <input type="text" onChange={e => setValues({...values,username: e.target.value})} class="inputField" id="username" placeholder="Username" /> 
                            </div>
                            
                        <div class="inputContainer">
                            <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                            </svg>
                            <input type="password" onChange={e => setValues({...values,password: e.target.value})} class="inputField" id="password" placeholder="Password" />
                        </div>
                                    
                      <div class="check">
                        <div class="remember">
                        <input class="checkbox" type="checkbox"/>
                        <label>Remember me </label>
                        </div>  
                        <div class="span">
                        <span>Forgot password?</span>
                        </div>
                      </div>
  
                        <button id="button" type="submit">Login</button>
                        <p class="p">Don't have an account? <span class="span"><NavLink to="/register">Sign Up</NavLink></span></p>

                        <p class="p">Or With</p>
                        <div className="flex-row">
                          <button className="btnA">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2e2e2e" viewBox="0 0 16 16">
                          <path fill="#4285F4" d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"/>
                          <path fill="#34A853" d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"/><path fill="#FBBC04" d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"/><path fill="#EA4335" d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"/>
                          </svg>Google</button>
                          <button className="btnA">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2e2e2e" viewBox="0 0 22 22">
                          <path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z"/>
                          </svg>Apple</button>
                        </div>
                    </form>
            </div>
        </>
    );
};

export default Login;