import React, {useEffect} from "react"
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import SideBar from "./NavBar/SideBar";
import NavBar from "./NavBar/NavBar";
import {useTranslation} from 'react-i18next'



const Home = () => {

    
    const [t, i18n] = useTranslation("global")

    return(

        <div data-spy="scroll" data-target=".main-nav">

        <section className="home" id="home" data-stellar-background-ratio="0.4" style={{backgroundPosition: '50% 0px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="st-home-unit" style={{ padding: '258px 0', opacity: 1 }}>
                            <div className="hero-txt">
                                <p className="hero-work">{t("home.title1")}</p>
                                <h2 className="hero-title">{t("home.title2")}</h2>
                                 <a href="#contact" className="btn btn-default btn-lg left-btn">{t("home.NavBar-Contact")}</a> 
                                
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
            <div className="mouse-icon">
                <div className="wheel"></div>
            </div>
        </section>

       
        
        </div>
    

  
        
    )
}

export default Home