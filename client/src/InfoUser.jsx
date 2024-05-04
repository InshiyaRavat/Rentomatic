import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";


const InfoUser=()=>{

    const [values,setValues] = useState({
        firstName : '',
        lastName : '',
        email : '',
        address : '',
        contact : '',
        DOB : '',
        eContact : '',
        zipCode : ''
    })

    const navigate = useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3001/saveDetails',values)
        .then(res=> 
            {
            if(res.data.Status === "Success"){
              navigate('/')
            }
            else{
              alert("error occured while Sign Up");
            }
            console.log(res);
        })
        .then(err=> console.log(err));
        
    }

    return(
        <>
        <div class="bg-img">
        <div className="boxContainer">
        <div className="form-align">
                    <form onSubmit={handleSubmit} class="form_main">
                            <p class="heading">Details</p>
                            <div class="inputContainer">
                                <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 23 23">
                                <path d="M12,2a10,10,0,1,0,5,18.66,1,1,0,1,0-1-1.73A8,8,0,1,1,20,12v.75a1.75,1.75,0,0,1-3.5,0V8.5a1,1,0,0,0-1-1,1,1,0,0,0-1,.79A4.45,4.45,0,0,0,12,7.5,4.5,4.5,0,1,0,15.3,15,3.74,3.74,0,0,0,22,12.75V12A10,10,0,0,0,12,2Zm0,12.5A2.5,2.5,0,1,1,14.5,12,2.5,2.5,0,0,1,12,14.5Z"></path>
                                </svg>
                               <input type="text" onChange={e => setValues({...values,firstName: e.target.value})} class="inputField" placeholder="Firstname" /> 
                            </div>
                            
                        <div class="inputContainer">
                            <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                            </svg>
                            <input type="text" onChange={e => setValues({...values,lastName: e.target.value})} class="inputField" placeholder="Lastname" />
                        </div>

                        <div class="inputContainer">
                            <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                            </svg>
                            <input type="text" onChange={e => setValues({...values,email: e.target.value})} class="inputField" placeholder="Email" />
                        </div>

                        <div class="inputContainer">
                            <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                            </svg>
                            <input type="text" onChange={e => setValues({...values,address: e.target.value})} class="inputField" placeholder="Address" />
                        </div>

                        <div class="inputContainer">
                            <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                            </svg>
                            <input type="text" onChange={e => setValues({...values,contact: e.target.value})} class="inputField" placeholder="Contact No." />
                        </div>

                        <div class="inputContainer">
                            <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                            </svg>
                            <input type="text" onChange={e => setValues({...values,DOB: e.target.value})} class="inputField" placeholder="DOB" />
                        </div>

                        <div class="inputContainer">
                            <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                            </svg>
                            <input type="text" onChange={e => setValues({...values,eContact: e.target.value})} class="inputField" placeholder="Emergency Contact No." />
                        </div>

                        <div class="inputContainer">
                            <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                            </svg>
                            <input type="text" onChange={e => setValues({...values,zipCode: e.target.value})} class="inputField" placeholder="Zip code" />
                        </div>

                        <button id="button" type="submit">Save</button>      
                                             
                    </form>
                </div>
                </div> 
            </div>
        </>
    );
};

export default InfoUser;