import React from 'react'
import './testimonials.css'
import dataTestimonials from '../../dataTestimonials'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className='container testimonials__container' 
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >


                {
                    dataTestimonials.map(({id, avatar, name, review, social}, index) => {
                        return(
                            <SwiperSlide key={id}  className='testimonial'>
                                <div className='client__avatar'>
                                    <img src={avatar}  alt='avatar 1'/>
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                                <spam>
                                    <small>{social}</small>
                                </spam>
                            </SwiperSlide>
                        )
                    })   
                }
            </Swiper>
        </section>
    )
}

export default Testimonials