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
      }, [user]);

console.log(role)



  return (
    <>

{!isAuthenticated && (

<li  className='nav-text'>
<Link onClick={loginWithPopup}>
  <span>LOGIN</span>
</Link>
</li>

            
              
              
            )

             }
 
 
                                 
 {isAuthenticated && (



<li  className='nav-text' >
<Link  onClick={handleLogout}>
  <span>LOGOUT</span>
</Link>
</li>

               
                
             )}


{isAuthenticated && role === 'user' && (


<li  className='nav-text'>
<Link to='/orders'>
  <span>Orders</span>
</Link>
</li>

               
           
             
           )}


{isAuthenticated && role === 'admin' && (


<li  className='nav-text'>
<Link to='/public'>
  <span>Public</span>
</Link>
</li>

 
           )}









    



    
                                 
    

     
    </>
  );
};

export default SideBar;
