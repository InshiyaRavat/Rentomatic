import React from "react";
import Footer from "./Footer";
import rentalImg from '../src/images/house-rental.jpg';
import ImgData from "./ImgData";
import Gallery from "./Gallery";
import Contact from "./Contact";

const Property=()=>{
    return(
        <>
                    <div class="card bg-dark text-white mx-auto" style={{width:'100%',height:'300px',borderRadius:'0px'}}>
                    <img src={rentalImg} class="card-img" alt="..." style={{opacity:'30%',width:'100%',height:'100%'}}/>
                    <div class="card-img-overlay">
                        <h1 class="card-title mx-auto" style={{paddingTop:'110px',fontSize:'50px'}}>FOR RENT</h1> 
                    </div>
                    </div>
                    
                    <div class="card mb-3 mx-auto" style={{width: "80%",borderColor:'transparent',paddingTop:'30px'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                            {/* <img src="..." class="img-fluid rounded-start" alt="..."/> */}
                            <ImgData index={0}/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body mx-auto" style={{paddingTop:'50px'}}>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <br/>
                                <button type="button" class="btn btn-outline-primary">Primary</button>
                            </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    
                    <div class="card mb-3 mx-auto" style={{width: "80%",borderColor:'transparent'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                            <ImgData index={1}/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <br/>
                                <button type="button" class="btn btn-outline-primary">Primary</button>
                            </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                   
                    <div class="card mb-3 mx-auto" style={{width: "80%",borderColor:'transparent'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src="..." class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <br/>
                                <button type="button" class="btn btn-outline-primary">Primary</button>
                            </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                   
                    <div class="card mb-3 mx-auto" style={{width: "80%",borderColor:'transparent'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src="..." class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <br/>
                                <button type="button" class="btn btn-outline-primary">Primary</button>
                            </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    
                    <div class="card mb-3 mx-auto" style={{width: "80%",borderColor:'transparent'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src="..." class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <br/>
                                <button type="button" class="btn btn-outline-primary">Primary</button>
                            </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    
                    <div class="card mb-3 mx-auto" style={{width: "80%",borderColor:'transparent'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src="..." class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <br/>
                                <button type="button" class="btn btn-outline-primary">Primary</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <br/>
                    <Contact/>
                    <br/>
                    <Footer/>
        </>
    );
};

export default Property;