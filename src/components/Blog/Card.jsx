import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const cardStyle = {
   cursor: "auto"
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    width: "100%", 
    objectFit: "cover", 
    borderRadius: '8px', 
  };

  return (
    <figure className="portfolio-item shuffle-item filtered" style={cardStyle}>
      <img src={props.image} alt={props.name} style={imageStyle} />
      <figcaption>
       
          <p style={{ margin: '8px 0', fontWeight: 'bold' }}>{props.name}</p>
          <Link to={`/detail/${props.id}`} className="btn btn-main">
          <i className="fa fa-link"></i> View more
        </Link>
            
        
      </figcaption>
    </figure>
  );
};

export default Card;
