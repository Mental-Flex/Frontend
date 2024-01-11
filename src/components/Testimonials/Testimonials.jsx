import { useEffect } from 'react';
import React from "react"
import { getTestimonials } from '../../redux/actions';
import { useDispatch, useSelector} from "react-redux"
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import './styles.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation'; 
import { useAuth0 } from "@auth0/auth0-react";







const Testimonials = () => {

	const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTestimonials())
    },[dispatch])

    const testimonials = useSelector(state => state.testimonials)

    let {user, isAuthenticated} = useAuth0();

	

	
    return(

<section className="conteiner">
<div class="row">
<div class="col-lg-6 mx-auto">
		
			
        
        <Swiper

spaceBetween={50}
slidesPerView={3}


        
        >

      { testimonials && testimonials.map((e)=>{

        return (

          

            <SwiperSlide>

           
                <div className='testimonial'>
                  <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                    <div className="blockquote-custom-icon bg-info shadow-sm"><i className="fa fa-quote-left text-white"></i></div>
                    <p className="mb-0 mt-2 font-italic">{e.description} <a href="#" className="text-info">@consequat</a>."</p>
                    <footer className="blockquote-footer pt-4 mt-4 border-top">Someone famous in
                        <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>

      </div>
            </SwiperSlide>

        )



      })

     
      
      }
      
      </Swiper>
</div>
</div>
</section>
        
    )
}

export default Testimonials