
import React, {useEffect, useState} from "react";
import Card from "../Blog/Card";
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const CardsContainer = (props) => {

  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    // Verificar si hay publicaciones antes de realizar el mapeo
    if (props.publications && props.publications.length > 0) {
      setLoading(false);
    }
  }, [props.publications]);

  if (loading) {
    return <div>Loading...</div>;
  }



    return(
        <TransitionGroup className="grid shuffle">
      {props.publications &&
        props.publications.map((e) => (
          <CSSTransition
            key={e._id}
            classNames="shuffle"
            timeout={{ enter: 250, exit: 250 }}
          >
            <Card
              id={e._id}
              name={e.name}
              description={e.description}
              image={e.image}
             
            />
          </CSSTransition>
        ))}
    </TransitionGroup>
    )



}

export default CardsContainer




