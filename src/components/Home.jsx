import React, {useEffect} from "react"
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import SideBar from "./SideBar";
import NavBar from "./NavBar";


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
            const username = user.name
            axios.post('http://localhost:3000/auth/', {username: user.name})
                
        }catch(error) {
                    
                    alert('No se puede crear el usuario');
                };
            }
    },[user])

     
        
          
        
      

    return(

        <div data-spy="scroll" data-target=".main-nav">

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