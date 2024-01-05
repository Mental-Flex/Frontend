import React, {useEffect} from "react"
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'


const Home = () => {

    let { logout, loginWithPopup, isAuthenticated, user } = useAuth0();
    const {loginWithRedirect} = useAuth0

    const handleLogout = () => {
        logout({ returnTo: window.location.origin });
      };


      useEffect(()=>{
       if(user && isAuthenticated){

        try{
            console.log(user.name)
            axios.post('http://localhost:3000/auth/', user.name)
                
        }catch(error) {
                    
                    alert('No se puede crear el usuario');
                };
            }
    },[user])

     
        
          
        
      

    return(

        <div data-spy="scroll" data-target=".main-nav">

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
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </header>
    
        <section className="home" id="home" data-stellar-background-ratio="0.4" style={{backgroundPosition: '50% 0px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="st-home-unit" style={{ padding: '258px 0', opacity: 1 }}>
                            <div className="hero-txt">
                                <p className="hero-work">Healing process starts now</p>
                                <h2 className="hero-title">Innovate & contemporary psychotherapy</h2>
                                 <a href="#contact" className="btn btn-default btn-lg left-btn">Contact Us</a> 
                                 {!isAuthenticated && (
              
            
             <button className="btn btn-default btn-lg left-btn" onClick={loginWithPopup}>LOGIN</button>
             
          )

          
          
          }


          




                                
                                 {isAuthenticated && (
              
                <button
                  onClick={handleLogout}
                  className="btn btn-default btn-lg left-btn"
                >
                    LOGUOT

                </button>
              
            )}
                                
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