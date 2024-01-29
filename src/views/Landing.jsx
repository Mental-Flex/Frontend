import React from "react"
import Home from '../components/Home';
import About from '../components/About';
import Funfacts from '../components/Funfacts';
import Services from '../components/Services';
import Phrase from '../components/Phrase';
import Blog from '../components/Blog/Blog';
import Testimonials from '../components/Testimonials/Testimonials';
import Pricing from '../components/Pricing';
import Questions from '../components/Questions';
import CallUs from '../components/CallUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import { Route, Routes, useLocation} from 'react-router-dom';
import Detail from "../components/Detail";
import NavBar from "../components/NavBar/NavBar";
import FormBlog from "../components/Blog/FormBlog";

import PublicTestimonial from "../components/Testimonials/PublicTestimonial";

import Purchase from "../components/Purchase/Purchase";
import Congratulations from "../components/Congratulations/Congratulations";






const Landing = () => {


    return(

		<>

<Routes>
                <Route path="/" element={
                    <>  

                    <NavBar/>
                        <Home />
                        <About />
                        <Funfacts />
                        <Services />
                        <Phrase />
                        <Blog />
                        <Testimonials />
                        <Pricing />
                        <Questions />
                        <CallUs />
                        <Contact />
                        <Footer />
                        
                    </>
                } />
                <Route path="/detail/:idPublication" element={<Detail />} />
                <Route path='/public' element={<FormBlog />} />
                <Route path="/testimonial" element={<PublicTestimonial/>}/>
                <Route path="/purchase" element={<Purchase/>}/>
                <Route path="/congratulations" element={<Congratulations/>}/>

                
                


            </Routes>

      


      

  

       </>
        
    )
}

export default Landing



