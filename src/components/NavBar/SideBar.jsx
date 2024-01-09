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
    const [role, setRole] = useState();
    

    

    

    const handleLogout = () => {
        logout({ returnTo: window.location.origin });
      };


      useEffect(() => {
        const fetchData = async () => {
          if (user && isAuthenticated) {
            try {
              const username = user.name;
              const response = await axios.post('http://localhost:3000/auth/', { username });
              setRole(response.data.roles[0].name);
              
              
              toast.success(`Welcome to Mental Flex ${user.name}!`, {
                position: 'bottom-left',
              });
            } catch (error) {
              alert('No se puede crear el usuario');
            }
          }
        };
    
        fetchData(); 
      }, [user, isAuthenticated]);

console.log(role)



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


{isAuthenticated && role === 'user' && (
               
               <Link
                 to='/orders'
                 className='nav-text'
               >
                   Orders

               </Link>
             
           )}


{isAuthenticated && role === 'admin' && (
               
               <Link
                 to='/public'
                 className='nav-text'
               >
                   Public

               </Link>
             
           )}









    



    
                                 
    

     
    </>
  );
};

export default SideBar;
