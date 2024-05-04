import React, { useState } from "react";
import fetch from 'node-fetch';
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'

const Register=()=>{

  const [values,setValues] = useState({
    username : '',
    email: '',
    password : ''
  })

const navigate= useNavigate()
const handleSubmit=(event)=>{
  event.preventDefault();
  axios.post('http://localhost:3001/registerUser',values)
  .then(res=> 
    {
    if(res.data.Status === "Success"){
      navigate('/infoUser')
    }
    else{
      alert("error occured while Sign Up");
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
                            <p class="heading">Sign Up</p>
                            <div class="inputContainer">
                                <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 23 23">
                                <path d="M12,2a10,10,0,1,0,5,18.66,1,1,0,1,0-1-1.73A8,8,0,1,1,20,12v.75a1.75,1.75,0,0,1-3.5,0V8.5a1,1,0,0,0-1-1,1,1,0,0,0-1,.79A4.45,4.45,0,0,0,12,7.5,4.5,4.5,0,1,0,15.3,15,3.74,3.74,0,0,0,22,12.75V12A10,10,0,0,0,12,2Zm0,12.5A2.5,2.5,0,1,1,14.5,12,2.5,2.5,0,0,1,12,14.5Z"></path>
                                </svg>
                               <input type="text" onChange={e => setValues({...values,username: e.target.value})} class="inputField" id="username" placeholder="Username" /> 
                            </div>
                            
                            <div class="inputContainer">
                                <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 24 24">
                                <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"></path>
                                </svg>
                               <input type="text" onChange={e => setValues({...values,email: e.target.value})} class="inputField" id="email" placeholder="email" /> 
                            </div>

                        <div class="inputContainer">
                            <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                            </svg>
                            <input type="password" onChange={e => setValues({...values,password: e.target.value})} class="inputField" id="password" placeholder="Password" />
                        </div>
                                    
                       <button id="button" type="submit">Sign Up</button>
                        <p class="p">Already have an account? <span class="span"><NavLink to="/login">Login</NavLink></span></p>
                    </form>
            </div>
        </>
    );
};

export default Register;