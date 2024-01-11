import Card from "./Card";
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const CardsContainer = (props) => {

  
    




    return(
        <div style={{ display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 1,
    backgroundColor: '#FCF3CF',
    width: '100%', // Ancho al 100%
        height: '100%', // Altura al 100%


   }}>

      {props.orders &&
        props.orders.map((e) => (
       
            <Card
              paypal_email_address={e.paypal_email_address}
              paypal_account_id={e.paypal_account_id}
              paypal_account_status={e.paypal_account_status}
              name={e.name}
              surname={e.surname}
              address_line_1={e.address_line_1}
              address_area_2={e.address_area_2}
              address_area_1= {e.address_area_1}
              postal_code={e.postal_code}
              country_code={e.country_code}
              payment_status={e.payment_status}
              payment_id={e.payment_id}
              payment_amount_value={e.payment_amount_value}
              payment_amount_currency_code={e.payment_amount_currency_code}
              payment_create={e.payment_create}
              payment_update={e.payment_update}
             
            />
          
        ))}


        </div>
    
    )



}

export default CardsContainer




