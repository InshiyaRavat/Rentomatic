import React from "react";
import rent from "../src/images/pay-rent.jpg";
import contactseller from "../src/images/contact-seller.jpg";
import service from "../src/images/maintenance-and-service.jpg";
import electricitybill from "../src/images/pay-electricity-bill.jpg";
import gasbill from '../src/images/gassbill2.png';
import { Link as ScrollLink, Element, scroller } from "react-scroll";
import { useEffect } from "react";
import Footer from "./Footer";

const Service=()=>{
  useEffect(() => {
    const elementId = window.location.hash.substring(1);
    scroller.scrollTo(elementId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }, []);
  return(
    <div>
              <Element id="add-care"><h1 style={{fontFamily:'Merriweather,serif',color:"#011f4f",backgroundColor:'#95c9f5',height:'auto',paddingTop:'20px',paddingBottom:'20px'}}>Adding Care To Your Property<br/></h1></Element>
              <Element id="pay-rent">
                <div class="card mb-3 card-size-service mx-auto" style={{width:'80%'}} >
                    <div class="row g-0">
                      <div class="col-md-4 ">
                        <img src={rent} class="img-fluid rounded-start img-service-size" alt="pay rent" style={{height:'300px',width:'auto'}}/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title gradient-underline" >Pay Rent</h5>
                          <p class="card-text">You can easily pay your rent through our website.</p>
                        </div>
                      </div>
                    </div>
                </div>
              </Element>

              <Element id='contact-seller'>
                <div class="card mb-3 card-size-service mx-auto" style={{width:'80%'}} >
                    <div class="row g-0">
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title gradient-underline">Contact Seller</h5>
                          <p class="card-text">Contact sellers directly without any broker involvement.</p>
                        </div>
                      </div>
                      <div class="col-md-4 ">
                        <img src={contactseller} class="img-fluid rounded-start img-service-size"  alt="contact seller" style={{height:'300px',width:'auto'}}/>
                      </div>
                    </div>
                </div>
                </Element>

              <Element id='maintenance'>
                <div class="card mb-3 card-size-service mx-auto" style={{width:'80%'}} >
                    <div class="row g-0">
                      <div class="col-md-4 ">
                        <img src={service} class="img-fluid rounded-start img-service-size" alt="service" style={{height:'300px',width:'auto'}}/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title gradient-underline">Maintenance And Service</h5>
                          <p class="card-text">Need maintenance and service help? Then relax because we've got you covered.</p>
                        </div>
                      </div>
                    </div>
                </div>
                </Element>

                <Element id='electricity-bill'>
                <div class="card mb-3 card-size-service mx-auto" style={{width:'80%'}} >
                    <div class="row g-0">
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title gradient-underline">Pay Electricity Bills</h5>
                          <p class="card-text">Pay your electricity bill through our website.</p>
                        </div>
                      </div>
                      <div class="col-md-4 ">
                        <img src={electricitybill} class="img-fluid rounded-start img-service-size" alt="electricity bill" style={{height:'300px',width:'auto'}}/>
                      </div>
                    </div>
                </div>
                </Element>

                <Element id='gas-bill'>
                <div class="card mb-3 card-size-service mx-auto" style={{width:'80%'}}  >
                    <div class="row g-0">
                      <div class="col-md-4 ">
                        <img src={gasbill} class="img-fluid rounded-start img-service-size"  alt="gas bill" style={{height:'300px',width:'auto'}}/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title gradient-underline">Pay Gas Bills</h5>
                          <p class="card-text">Pay your gas bills online from now.</p>
                        </div>
                      </div>
                    </div>
                </div>
                </Element>
                <ScrollLink to="add-care" smooth={true} duration={500}> Back to Pay Rent</ScrollLink>
                <br/>
                <br/> 
                <Footer/>
    </div>
  );
};

export default Service;
