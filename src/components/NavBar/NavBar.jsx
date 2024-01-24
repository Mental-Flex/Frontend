import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import './Navbar.css'
import { useAuth0 } from "@auth0/auth0-react";
import SideBar from './SideBar';
import {useTranslation} from 'react-i18next'
import {Link} from 'react-scroll'




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
            <Link className="navbar-brand"to="home" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500}
      style={{ cursor: 'pointer' }} ><img src="assets/photos/logo3.png" alt="" className="img-responsive"/></Link>
        </div>

        
        <div className="collapse navbar-collapse main-nav" id="sept-main-nav">
            <ul className="nav navbar-nav navbar-right">
                <li ><Link to="home" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500} 
      style={{ cursor: 'pointer' }}>{t("home.NavBar-Home")}</Link></li>
                
                <li><Link  to="about" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}
      style={{ cursor: 'pointer' }}
      >{t("home.NavBar-About")}</Link></li>
                <li><Link to="service" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500}
      style={{ cursor: 'pointer' }} >{t("home.NavBar-Services")}</Link></li>
                <li><Link to="portfolio" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      style={{ cursor: 'pointer' }}>{t("home.NavBar-Blog")}</Link></li>
                <li><Link  to="pricing" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}
      style={{ cursor: 'pointer' }} >{t("home.NavBar-Pricing")}</Link></li>
                <li><Link to="contact" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      style={{ cursor: 'pointer' }}>{t("home.NavBar-Contact")}</Link></li>
                <li> <a onClick={()=> i18n.changeLanguage("es")} style={{ cursor: 'pointer' }}>ES</a></li>
                <li> <a onClick={()=> i18n.changeLanguage("en")} style={{ cursor: 'pointer' }}>EN </a></li>

                
                <li><a  onClick={showSidebar} style={{ cursor: 'pointer' }} ><FaIcons.FaBars/></a>

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
  