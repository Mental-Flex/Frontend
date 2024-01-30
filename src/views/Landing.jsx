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


import Congratulations from "../components/Congratulations/Congratulations";

import Purchase1EN from "../components/Purchase/Purchase1EN";
import Purchase1ES from "../components/Purchase/Purchase1ES";
import Purchase2EN from "../components/Purchase/Purchase2EN";
import Purchase3EN from "../components/Purchase/Purchase3EN";
import Purchase3ES from "../components/Purchase/Purchase3ES";
import Purchase4EN from "../components/Purchase/Purchase4EN";
import Purchase4ES from "../components/Purchase/Purchase4ES";
import Purchase5EN from "../components/Purchase/Purchase5EN";
import Purchase5ES from "../components/Purchase/Purchase5ES";
import Purchase2ES from "../components/Purchase/Purchase2ES";






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
                <Route path="/purchase1EN" element={<Purchase1EN/>}/>
                <Route path="/purchase1ES" element={<Purchase1ES/>}/>
                <Route path="/purchase2EN" element={<Purchase2EN/>}/>
                <Route path="/purchase2ES" element={<Purchase2ES/>}/>
                <Route path="/purchase3EN" element={<Purchase3EN/>}/>
                <Route path="/purchase3ES" element={<Purchase3ES/>}/>
                <Route path="/purchase4EN" element={<Purchase4EN/>}/>
                <Route path="/purchase4ES" element={<Purchase4ES/>}/>
                <Route path="/purchase5EN" element={<Purchase5EN/>}/>
                <Route path="/purchase5ES" element={<Purchase5ES/>}/>
                
                
                
                
                <Route path="/congratulations" element={<Congratulations/>}/>

                
                


            </Routes>

      


      

  

       </>
        
    )
}

export default Landing



