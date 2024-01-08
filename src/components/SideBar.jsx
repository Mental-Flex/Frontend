import React, {useEffect, useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import { Link } from 'react-router-dom';
import './Navbar.css'


const SideBar = () => {


    let { logout, loginWithPopup, isAuthenticated, user } = useAuth0();

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

    <Link to= '/public' className='nav-text' >Public Blog</Link>
    

     
    </>
  );
};

export default SideBar;
