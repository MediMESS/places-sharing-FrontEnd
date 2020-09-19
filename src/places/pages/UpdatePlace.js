import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
} from "../../shared/util/validators";
import "./FormPlace.css";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import { DUMMY_PLACES } from "../pages/places";
import useForm from "../../shared/hooks/form-hook";

const UpdatePlace = (props) => {
  const [isLoading, setLoading] = useState(true);

  const { placeId } = useParams();

  const [formState, inputHandler, setFormData] = useForm({
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      isValid: false,
    },
  });

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    setFormData({
      inputs: {
        title: {
          value: identifiedPlace && identifiedPlace.title,
          isValid: true,
        },
        description: {
          value: (identifiedPlace && identifiedPlace.description) || "",
          isValid: true,
        },
      },
      isValid: true,
    });
    setLoading(false);
  }, [setFormData, identifiedPlace]);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("UPDATE");
    console.log(formState.inputs);

    props.history.push(`/${identifiedPlace.creator}/places`);
  };
  return (
    <form className="place-form" onSubmit={onFormSubmit}>
      <h1 className="center">EDIT PLACE</h1>

      <Input
        id="title"
        label="Title"
        element="input"
        type="text"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialIsValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        label="Description"
        element="input"
        type="text"
        validators={[
          VALIDATOR_REQUIRE(),
          VALIDATOR_MINLENGTH(5),
          VALIDATOR_MAXLENGTH(100),
        ]}
        errorText="Please enter a valid title"
        initialValue={formState.inputs.description.value}
        initialIsValid={formState.inputs.description.isValid}
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
