import React from 'react';
import './App.css';
import { useState } from "react";

function Contact() {

  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) =>{
    const { name, value} = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
    };
  });
};

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My moblie number is ${data.phone} and email is ${data.email}, Here is what i want to say ${data.msg} `
    );
  };
  return (
  <>
    <div className="my-5">
      <h3 style={{textAlign:'center',fontFamily:'Oswald, sans-serif',color:'#3b69ed'}}>Need Help</h3>
    </div>
    <div className="conatainer contact_div d-flex justify-content-center">
      <div className="row">
        <div className="col-md-12 col-15 ">
          <form onSubmit={formSubmit}>
          <div class="mb-3">
           <label for="exampleFormControlInput1" class="form-label">Full Name</label>
           <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name" />
          </div>
          <div class="mb-3">
           <label for="exampleFormControlInput1" class="form-label">Phone</label>
           <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile Number" />
          </div>
          <div class="mb-3">
           <label for="exampleFormControlInput1" class="form-label">Email address</label>
           <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
          </div>
          <div class="mb-3">
           <label for="exampleFormControlTextarea1" class="form-label">Message</label>
           <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
          </div>
          <div class="col-12">
            <button class="btn btn-outline-primary" type="submit">Submit form</button>
          </div>
         </form>
        </div>
      </div>
    </div>

  </>

  );
}


export default Contact;