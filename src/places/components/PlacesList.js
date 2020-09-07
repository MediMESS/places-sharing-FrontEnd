import React from "react";

import PlaceItem from "./PlaceItem";

const places = [
  {
    id: "u1",
    title="Bora Bora beach",
    imgeUrl:
      "https://www.wendyperrin.com/wp-content/uploads/2018/02/17-12-Brando-Suites-Bora-Bora-aerial-view-CR-Brando-Suites-1000x667.jpg",
    description: "Very Beautiful #1 Place",
    location: {
      lat: 34,
      long: 55,
    },
    creator: "u1",
    address: "address place number #1",
  },
];
const PlacesList = (props) => {
  return (
    <ul className="places-list">
      {props.places.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          title={place.title}
          imageUrl={imageUrl}
          address={place.address}
          location={place.location}
          description={place.description}
          creator={place.creator}
        />
      ))}
    </ul>
  );
};

export default PlacesList;
