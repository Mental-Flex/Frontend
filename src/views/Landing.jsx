import React from "react"
import Home from '../components/Home';
import About from '../components/About';
import Funfacts from '../components/Funfacts';
import Services from '../components/Services';
import Phrase from '../components/Phrase';
import Blog from '../components/Blog/Blog';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Questions from '../components/Questions';
import CallUs from '../components/CallUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import { Route, Routes, useLocation} from 'react-router-dom';
import Detail from "../components/Detail";
import NavBar from "../components/NavBar";





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
                <Route path='/detail' element={<Detail />} />
            </Routes>

      


      

  

       </>
        
    )
}

export default Landing



