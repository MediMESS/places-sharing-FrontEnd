import React, { useReducer, useEffect } from "react";

import "./Input.css";
import { validate } from "../../util/validators";
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: action.payload,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isValid: props.initialIsValid || false,
    isTouched: false,
  });

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
      payload: true,
    });
  };

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validators: props.validators,
    });
  };

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  let element;
  element =
    props.element === "input"
      ? (element = (
          <input
            type={props.type}
            placeholder={props.placeholder}
            id={props.id}
            onChange={changeHandler}
            onBlur={touchHandler}
            value={inputState.value}
          />
        ))
      : (element = (
          <textarea
            id={props.id}
            rows={props.size || 3}
            value={inputState.value}
            onBlur={touchHandler}
            onChange={changeHandler}
          ></textarea>
        ));

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
