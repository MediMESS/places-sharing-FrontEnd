import React from "react";

import PlaceItem from "./PlaceItem";
import "./PlacesList.css";
const PlacesList = (props) => {
  return (
    <ul className="places-list">
      {props.places.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          title={place.title}
          image={place.imageUrl}
          address={place.address}
          location={place.location}
          description={place.description}
          creatorId={place.creator}
        />
      ))}
    </ul>
  );
};

export default PlacesList;
