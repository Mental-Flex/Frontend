import Card from "../Blog/Card";
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const CardsContainer = (props) => {

  
    




    return(
        <TransitionGroup className="grid shuffle">
      {props.publications &&
        props.publications.map((e) => (
          <CSSTransition
            key={e.id}
            classNames="shuffle"
            timeout={{ enter: 250, exit: 250 }}
          >
            <Card
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




