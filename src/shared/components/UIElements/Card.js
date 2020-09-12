import React from "react";
import "./Card.css";
import CSSTransition from "react-transition-group";

const Card = (props) => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
