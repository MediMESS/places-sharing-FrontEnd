import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (state.inputs[inputId]) {
          if (inputId === action.inputId) {
            formIsValid = formIsValid && action.isValid;
          } else {
            formIsValid = formIsValid && state.inputs[inputId].isValid;
          }
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            isValid: action.isValid,
            value: action.value,
          },
        },
        isValid: formIsValid,
      };

    case "SET_DATA":
      return {
        inputs: action.inputs,
        isValid: action.isValid,
      };

    default:
      return state;
  }
};

const useForm = (initialState) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialState.inputs,
    isValid: initialState.isValid,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const setFormData = useCallback((dataForm) => {
    dispatch({
      type: "SET_DATA",
      inputs: dataForm.inputs,
      isValid: dataForm.isValid,
    });
  }, []);

  return [formState, inputHandler, setFormData];
};

export default useForm;
