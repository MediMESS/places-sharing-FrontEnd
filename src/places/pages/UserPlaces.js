import React, { Component } from "react";

import { DUMMY_PLACES } from "./places";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import PlacesList from "../components/PlacesList";

class UserPlaces extends Component {
  render() {
    const { userId } = this.props.match.params;
    const places = DUMMY_PLACES.filter((p) => p.creator === userId);

    if (places.length === 0) {
      return (
        <div className="center">
          <Card>
            <h1>No Places found</h1>
            <p>Wanna share one?</p>
            <Button to="/places/new">Share Place</Button>
          </Card>
        </div>
      );
    }
    return <PlacesList places={places} />;
  }
}

export default UserPlaces;
