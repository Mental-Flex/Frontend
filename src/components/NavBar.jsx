import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import './Navbar.css'



const NavBar = () => {

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
                <li className="active"><a href="#home">Home</a></li>
                
                <li><a href="#about">About</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#portfolio">Blog</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a  onClick={showSidebar}><FaIcons.FaBars/></a>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
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
  