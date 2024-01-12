import { useEffect } from 'react';
import React, { useRef, useState } from 'react';
import { getTestimonials } from '../../redux/actions';
import { useDispatch, useSelector} from "react-redux"
import { useAuth0 } from "@auth0/auth0-react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';
import { Navigation } from 'swiper/modules';







const Testimonials = () => {

	const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTestimonials())
    },[dispatch])

    const testimonials = useSelector(state => state.testimonials)

    let {user, isAuthenticated} = useAuth0();

	console.log(testimonials)

	
    return(

        <section className="my-section">
		
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

            {testimonials && testimonials.map((e)=>{

                return(



                <SwiperSlide>


                    
                   <div className='mytestimonial'>

                    <div className='testi-content'>

                        <div className='slide'>


                            <p>{e.description}</p>
                            <i class='bx bxs-quote-alt-left quote-icon'></i>

                            <div className='mydetails'>
                                <span className='name'>{e.name}</span>
                            </div>




                        </div>



                    </div>


                   </div>
                
                
                </SwiperSlide>
                
                
                )



            })}
        
        
      </Swiper>


      </section>


        
    )
}

export default Testimonials