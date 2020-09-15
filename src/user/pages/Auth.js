import React, { useState } from "react";

import "./Auth.css";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../../shared/util/validators";
import Card from "../../shared/components/UIElements/Card";
import useForm from "../../shared/hooks/form-hook";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
    isValid: false,
  });

  const switchModeHandler = () => {
    if (!isLogin) {
      setFormData({
        inputs: {
          ...formState.inputs,
          name: undefined,
        },
        isValid:
          formState.inputs.email.isValid && formState.inputs.password.isValid,
      });
    } else {
      setFormData({
        inputs: {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        isValid: false,
      });
    }
    setIsLogin((prevLogin) => !prevLogin);
  };
  const authSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <Card className="authentication">
      {!isLogin ? <h1>Sign Up</h1> : <h1>Sign In</h1>}
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLogin && (
          <Input
            element="input"
            type="text"
            id="name"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            errorText="Please enter a valid name"
          />
        )}
        <Input
          element="input"
          type="text"
          id="email"
          label="Email"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
          onInput={inputHandler}
          errorText="Please enter a valid email"
        />
        <Input
          element="input"
          type="text"
          id="password"
          label="Password"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
          onInput={inputHandler}
          errorText="Please enter a password of minimum 6 characters"
        />
        <Button type="submit" disabled={!formState.isValid}>
          Sign In
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        Switch to {isLogin ? "Sign Up" : "Sign In"}
      </Button>
    </Card>
  );
};

export default Auth;
