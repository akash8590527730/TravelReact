import React from "react";
import Testimonialcss from './../Testimonials/Testimonial.module.css'

import user1 from './../../assets/User1.png'
import user2 from './../../assets/User2.png'
import user3 from './../../assets/User3.png'
import user4 from './../../assets/User4.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
function Testimonial(){
    return(
        <div className={`${Testimonialcss.TestimonialWrapper} section` } id="testimonials">
            <div className={Testimonialcss.content}> 
                <h2>What our Client Say?</h2>
                <p>Follow up.</p>
                <div>
                    <h3>5K + <span>Happy Clients</span></h3>
                </div>
                <div>
                    <h3>4 +..  <span>Overall Rating</span></h3>
                </div>
            </div>
            <Swiper className={Testimonialcss.swiper}>
                <SwiperSlide>
                    <div className={Testimonialcss.Testimonial}>
                        <div className="Testimonialcss.profile">
                            <img src={user1} alt="" />
                            <h3>Luka Paul <span></span></h3>
                        </div>
                        <p>Everything was very smooth... Tension free trip...</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Testimonialcss.Testimonial}>
                        <div className="Testimonialcss.profile">
                            <img src={user2} alt="" />
                            <h3>Luka Paul <span>ABC.SEO</span></h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Testimonialcss.Testimonial}>
                        <div className="Testimonialcss.profile">
                            <img src={user3} alt="" />
                            <h3>Luka Paul <span>ABC.SEO</span></h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Testimonialcss.Testimonial}>
                        <div className="Testimonialcss.profile">
                            <img src={user4} alt="" />
                            <h3>Luka Paul <span>ABC.SEO</span></h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}
export default Testimonial