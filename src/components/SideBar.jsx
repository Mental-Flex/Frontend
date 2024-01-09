import React, {useEffect, useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SideBar = () => {

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
            toast.success(`Welcome to Mental Flex ${user.name}!`, {
                position: 'bottom-left',
              });
                
        }catch(error) {
                    
                    alert('No se puede crear el usuario');
                };
            }
    },[user])

     

    const [isAdmin, setIsAdmin] = useState(false);

    // useEffect(async()=>{
    //     if(user && isAuthenticated){
 
    //      try{
             
    //          const response = await axios.get(`http://localhost:3000/auth/username/${user.name}`)
             
    //          console.log("aca")
    //          console.log(response.data)
    //          console.log("aca")
                 
    //      }catch(error) {
                     
    //                  alert('No se puede crear el usuario');
    //              };
    //          }
    //  },[user])
 






    

  return (
    <>

{!isAuthenticated && (
            
              <Link className='nav-text' onClick={loginWithPopup}>LOGIN</Link>
              
            )

             }
 
 
                                 
 {isAuthenticated && (
               
                 <Link
                   onClick={handleLogout}
                   className='nav-text'
                 >
                     LOGUOT
 
                 </Link>
               
             )}
                                 
    

     
    </>
  );
};

export default SideBar;
