import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";
const Button = (props) => {
  if (props.href) {
    return (
      <a
        className={`button button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  } else if (props.to) {
    return (
      <Link
        className={`button button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"}`}
        to={props.to}
      >
        {props.children}
      </Link>
    );
  } else {
    return (
      <button
        className={`button button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"}`}
        href={props.href}
        onClick={props.onClick}
        disabled={props.disabled}
        type={props.type}
      >
        {props.children}
      </button>
    );
  }
};

export default Button;
