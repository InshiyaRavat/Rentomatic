import React, { useEffect, useState } from "react";
import Try from "./Try";
import look from "../src/images/looking-removebg-preview.png";
import keys from "../src/images/giveKeys-removebg-preview.png";
import find from "../src/images/Rentomatic-removebg-preview.png";
import man from "../src/images/man2-removebg-preview.png";
import forRent from "../src/images/entomatic-image-home-page.png";
import single from "../src/images/single-family.jpg";
import multi from "../src/images/multi-unit.jpeg";
import hoa from "../src/images/hos.jpg";
import commercial from "../src/images/commercial.png";
import { Parallax,ParallaxLayer } from "@react-spring/parallax";
import { NavLink, useNavigate } from "react-router-dom";
import Slider2 from "./Slider2";
import Contact from "./Contact";
import Footer from './Footer';
import axios from 'axios';
import Navbar from "./Navbar";

const Home=()=>{
    const [name,setName]= useState('')
    const navigate= useNavigate()

    axios.defaults.withCredentials = true;
    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(res=>{
            if(res.data.valid){
                setName(res.data.username);
            }
            else{
                navigate('/login')
            }
        })
    })
    
    return(
        <>
        <div style={{backgroundColor:'#95c9f5'}}>
            <div id='margin-blue-bg'>
            <img src={forRent} id="image-forRent" alt='for rent image' />
            <br/>
            <br/>
            <br/>
       <h1 style={{fontFamily:'Merriweather,serif'}}>A Property Management Company</h1>
       <br/>
       <h5> That allows you to</h5>
       <Try/>
       <br/>
       <NavLink to='/service'><button type="button" class="btn btn-outline-primary">Visit our services</button></NavLink>
       <br/>
       <br/>
       <br/>
       </div>
       </div>
            

        <div className="container2" >
            <div className="container2 side">
             <Parallax class='img-fluid' pages={2.5} id='parallax' style={{width:'1200px',height:'400px'}} >
                <ParallaxLayer offset={0} speed={0.5} factor={1} style={{
                    backgroundSize:'cover',
                    marginRight:'100px'
                }}><img className='img-fluid parallax-img' src={look}  /></ParallaxLayer>
                <ParallaxLayer offset={0.9} speed={0.5} factor={1} style={{
                    backgroundSize:'cover',
                    marginRight:'100px'
                }}><img  className='img-fluid parallax-img' src={find}  /></ParallaxLayer>
                <ParallaxLayer offset={1.5} speed={0.5} factor={1} style={{
                    backgroundSize:'cover',
                    marginRight:'100px'
                }}><img  className='img-fluid parallax-img' src={keys}/></ParallaxLayer>
                <ParallaxLayer sticky={{start:0.3,end:2.9}} >
                    <img  className='img-fluid parallax-man' src={man} style={{height:'200px',float:'right', marginRight:'300px',marginTop:'90px'}} />
                </ParallaxLayer>
             </Parallax>
             </div>
             <div className="conatiner2 side-content-center">
                    <p style={{width:'500px'}}> <h1 style={{fontFamily:'Oswald, sans-serif',fontStyle:'bold',color:'#3762de'}}><br/>What Is Rentomatic?</h1>
                   <br/>A software designed to streamline and automate the process involved in managing renting properties.The main purpose of a Rentomatic is to simplify and centralize tasks related to property listings, tenant management, lease agreements, rent collection, maintenance requests,and financial reporting. </p>
            </div>
         </div>
        {/* <div style={{float:"left", marginLeft:'20px',textAlign:'left'}}>
            
        <h2><br/><br/><br/> Are you a<span style={{color:'#3762de'}}>Student , Married Couple or Working Professional </span>looking for apartments available for rent?</h2>
       
        <h6><br/>Okay then! you are at the <span style={{fontStyle:'italic'}}>right place.</span>Are you a </h6>
        <br/>
        <button className="frameOut"><NavLink className="frame" to="/property"></NavLink></button>
        <br/> */}
        <br/>
        <br/>
        <br/>
        <Slider2/>
        <br/>
        <br/>

        <div>
        <div id='margin-blue-bg'>
            <h1 style={{textAlign:'center',fontFamily:'Oswald, sans-serif'}}>Property Management Types</h1>
            <div class="card-group propertycard " >
                    <div class=" card card-effect-group" id='pro-card-style'>
                    <img src={single} class="card-img-top pro-img-style" alt="property images" />
                    <div class="card-body">
                        <p class="card-text">Single-Family Property</p>
                    </div>
                    </div>

                    <div class="card card-effect-group" id='pro-card-style' >
                    <img src={multi} class="card-img-top pro-img-style" alt="property images" />
                    <div class="card-body">
                        <p class="card-text">Multi-Unit Property</p>
                    </div>
                    </div>
                    <div class="card card-effect-group" id='pro-card-style'>
                    <img src={hoa} class="card-img-top pro-img-style" alt="property images" />
                    <div class="card-body">
                        <p class="card-text">HOA Property Management</p>
                    </div>
                    </div>

                    <div class="card card-effect-group" id='pro-card-style'>
                    <img src={commercial} class="card-img-top pro-img-style" alt="property images" />
                    <div class="card-body">
                        <p class="card-text">Commercial Property Management</p>
                    </div>
                    </div>
            </div>
            </div>
        </div>
            <div id='contact-size'>
                <Contact/>
            </div>
        <br/>
        <Footer/>
        </>
    );
};

export default Home;