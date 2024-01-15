import React, {useEffect} from "react";
import { InlineWidget } from "react-calendly";

import './calendary.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Calendary = () => {


  useEffect(()=>{

    toast.success('Payed', {
      position: 'bottom-left',
    });
    
},[])





  return (

    <>
    <div className="App">

<div className="section-title st-center">
						<h3>Congratulations! You have a session with Mental Flex</h3>
						<p>Now you can schedule an appointment</p>
					

            <div style={{  display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>


            <InlineWidget url="https://calendly.com/mentalflex2024" />
      
      </div>
      </div>

      
    </div>
    <a href="http://localhost:3001" className="btn btn-default btn-lg left-btn">Contact Us</a> 
    
    </>
  );
};

export default Calendary;
