import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import './Navbar.css'
import { useAuth0 } from "@auth0/auth0-react";
import SideBar from './SideBar';
import {useTranslation} from 'react-i18next'


const NavBar = () => {

   const [t, i18n] = useTranslation("global")
    

    let { logout, loginWithPopup, isAuthenticated, user } = useAuth0();

    const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  

    return (
      <header className="st-navbar">
            
<nav className="navbar navbar-default navbar-fixed-top clearfix" role="navigation">
    <div className="container">
        
        
        
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#sept-main-nav">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><img src="assets/photos/logo3.png" alt="" className="img-responsive"/></a>
        </div>

        
        <div className="collapse navbar-collapse main-nav" id="sept-main-nav">
            <ul className="nav navbar-nav navbar-right">
                <li ><a href="#home">{t("home.NavBar-Home")}</a></li>
                
                <li><a href="#about">{t("home.NavBar-About")}</a></li>
                <li><a href="#service">{t("home.NavBar-Services")}</a></li>
                <li><a href="#portfolio">{t("home.NavBar-Blog")}</a></li>
                <li><a href="#pricing">{t("home.NavBar-Pricing")}</a></li>
                <li><a href="#contact">{t("home.NavBar-Contact")}</a></li>
                <li> <a onClick={()=> i18n.changeLanguage("es")} style={{ cursor: 'pointer' }}>ES</a></li>
                <li> <a onClick={()=> i18n.changeLanguage("en")} style={{ cursor: 'pointer' }}>EN </a></li>

                
                <li><a  onClick={showSidebar}><FaIcons.FaBars/></a>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            
           <SideBar/>
          </ul>
        </nav>
                </li>
                
               
            </ul>
            
        </div>
    </div>
</nav>
</header>
    );
  };
  
  export default NavBar;
  