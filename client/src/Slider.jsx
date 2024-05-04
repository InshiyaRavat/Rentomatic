import React from "react";
import {Swiper,SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//import { EffectCoverflow } from "swiper";

import { EffectCoverflow,Pagination,Navigation } from "swiper";

import rent from "../src/images/pay-rent.jpg";
import contactseller from "../src/images/contact-seller.jpg";
import service from "../src/images/maintenance-and-service.jpg";
import electricitybill from "../src/images/pay-electricity-bill.jpg";

const Slider=()=>{
    return(
        <div className="containerS">
            <h1 className="headingS">Our Services</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={
                    {
                        rotate:0,
                        stretch:0,
                        depth:100,
                        modifier:4.5,
                    }
                }

                pagination={{el:'.swiper-pagination',clickable:true}}
                navigation={{
                    nextEl:'.swiper-button-next',
                    prevEl:'.swiper-button-prev',
                    clickable:true,
                }}
                modules={[EffectCoverflow,Pagination,Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <div class="card" style={{width: '18rem',boxShadow:'0 0 2em rgba(0,0,0,.2)'}}>
                    <img src={rent} style={{width:'280px',height:'auto'}} class="card-img-top" alt="sliding image"/>
                    <div class="card-body">
                        <p class="card-text"><br/><br/>You can easily pay your rent through our website.<br/><br/></p>
                    </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="card" style={{width: '18rem',boxShadow:'0 0 2em rgba(0,0,0,.2)'}}>
                    <img src={contactseller} style={{width:'280px',height:'auto'}} class="card-img-top" alt="sliding image"/>
                    <div class="card-body">
                        <p class="card-text">Contact sellers directly without any broker involvement.</p>
                    </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="card" style={{width: '18rem',boxShadow:'0 0 2em rgba(0,0,0,.2)'}}>
                    <img src={service} style={{width:'280px',height:'auto'}} class="card-img-top" alt="sliding image"/>
                    <div class="card-body">
                        <p class="card-text">Need maintenance and service help? Then relax because we've got you covered.</p>
                    </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div class="card" style={{width: '18rem',boxShadow:'0 0 2em rgba(0,0,0,.2)'}}>
                    <img src={service} style={{width:'280px',height:'auto'}} class="card-img-top" alt="sliding image"/>
                    <div class="card-body">
                        <p class="card-text">Need maintenance and service help? Then relax because we've got you covered.</p>
                    </div>
                    </div>
                </SwiperSlide>
                

                    <div className="slider-container">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>

                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
            </Swiper>
        </div>
    );
};

export default Slider;