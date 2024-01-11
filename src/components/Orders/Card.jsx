import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
 



  return (
    <div  style={{ border: '1px solid white',
       
        borderRadius:  '15px',
        boxShadow: '0 0 15px rgb(216, 189, 189)',
        opacity: 0.6,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#d0d0d0',
        color: '#000'
        
        }}>
      
       
         
          <p>EMAIL: {props.paypal_email_address}</p>
        <p>ID PAYPAL: {props.paypal_account_id}</p>
              <p>ESTADO CUENTA PAYPAL: {props.paypal_account_status}</p>
              <p>NOMBRE Y APELLIDO: {props.name} {props.surname}</p>
              
              <p>DIRECCION: {props.address_line_1} {props.address_area_2} {props.address_area_1}</p>
             
              <p>CODIGO POSTAL: {props.postal_code}</p>
              <p>PAIS: {props.country_code}</p>
              <p>ESTADO DE PAGO: {props.payment_status}</p>
              <p>ID PAGO: {props.payment_id}</p>
              <p>VALOR PAGO: {props.payment_amount_value}</p>
              <p>MODEDA: {props.payment_amount_currency_code}</p>
              <p>CREADO: {props.payment_create}</p>
              
             

          
     
     
    </div>
  );
};

export default Card;
