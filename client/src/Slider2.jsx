import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

//import "./styles.css";
import rent from "../src/images/pay-rent.jpg";
import contactseller from "../src/images/contact-seller.jpg";
import service from "../src/images/maintenance-and-service.jpg";
import electricitybill from "../src/images/pay-electricity-bill.jpg";
import gas from "../src/images/gassbill2.png";

import { EffectCoverflow, Pagination } from "swiper";
import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <>
    <div className="service-slider slider-class">
        <div className="margin-slider">
    <div className="gradient-underline1" style={{textAlign:'center',fontFamily:'Oswald, sans-serif'}}>
        <h1 id='our-services'>Our Services</h1>
    </div>
    <br/>
      <Swiper
         effect={"coverflow"}
         grabCursor={true}
         initialSlide={2}
         centeredSlides={true}
         slidesPerView={"auto"}
         coverflowEffect={{
          rotate:50,
          stretch:0,
          depth:100,
          modifier:1,
          slidesPerView:1,
          slideShadows:true,
          spaceBetween:20,
         }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]} 
        id='swiper-size'
      >
        <div className="swiper-wrapper">
        <SwiperSlide id='slider-size'>
            <NavLink to="/service#pay-rent" style={{textDecoration:'none'}}>
            <div class="card card-size">
                        <img src={rent} class="card-img-top cardimg-size" alt="sliding image"/>
                        <div class="card-body">
                            <h3 style={{textAlign:'center'}}>Pay Rent</h3>
                            <p class="card-text"><br/><br/>You can easily pay your rent through our website.</p>
                        </div>
            </div>
            </NavLink>
        </SwiperSlide>
        <SwiperSlide to="/service#contact-seller" id='slider-size'>
             <NavLink  style={{textDecoration:'none'}}>
             <div class="card card-size">
                    <img src={contactseller} class="card-img-top cardimg-size" alt="sliding image"/>
                    <div class="card-body">
                        <p class="card-text">Contact sellers directly without any broker involvement.</p>
                    </div>
                    </div>
            </NavLink>
        </SwiperSlide>
        <SwiperSlide id='slider-size'>
            <NavLink to="/service#electricity-bill" style={{textDecoration:'none'}}>
            <div class="card card-size">
                    <img src={electricitybill} class="card-img-top cardimg-size" alt="sliding image"/>
                    <div class="card-body">
                        <p class="card-text">Pay your electricity bill through our website.</p>
                    </div>
            </div>
            </NavLink>
        </SwiperSlide>
        <SwiperSlide id='slider-size'>
            <NavLink to="/service#maintenance" style={{textDecoration:'none'}}>
            <div class="card card-size">
                    <img src={service} class="card-img-top cardimg-size" alt="sliding image"/>
                    <div class="card-body">
                        <p class="card-text">Need maintenance and service help? Then relax because we've got you covered.</p>
                    </div>
            </div>
            </NavLink>
        </SwiperSlide>
        <SwiperSlide id='slider-size'>
            <NavLink to="/service#gas-bill" style={{textDecoration:'none'}}>
            <div class="card card-size">
                    <img src={gas} class="card-img-top cardimg-size" alt="sliding image"/>
                    <div class="card-body">
                        <p class="card-text">Pay your gas bills online from now.</p>
                    </div>
            </div>
            </NavLink>
        </SwiperSlide>
        </div>
        <br/>
      </Swiper>
      <br/>
      </div>
      </div>
    </>
  );
}
