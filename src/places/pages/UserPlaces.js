import React, { Component } from "react";

import PlacesList from "../components/PlacesList";
class UserPlaces extends Component {
  places = [
    {
      id: "u1",
      title: "Bora Bora",
      imageUrl:
        "https://www.wendyperrin.com/wp-content/uploads/2018/02/17-12-Brando-Suites-Bora-Bora-aerial-view-CR-Brando-Suites-1000x667.jpg",
      description: "Very Beautiful #1 Place",
      location: {
        lat: 34,
        long: 55,
      },
      creator: "u1",
      address: "Very Beautiful Place number #1",
    },
    {
      id: "u2",
      title: "Sydney",
      imageUrl:
        "https://australie-a-la-carte.com/fichier/p_entete/17196/entete_img_australie_new_south_wales_sydney_harbour_150418_dnsw.jpg",
      description: "Very Beautiful #2 Place",
      location: {
        lat: 34,
        long: 55,
      },
      creator: "u3",
      address: "address place number #2",
    },
    {
      id: "u3",
      title: "Miami",
      imageUrl:
        "https://mansion-global-app.s3.amazonaws.com/stories/new-luxury-developments-spring-2018-miami/media/miamishorthand_lead-mr.jpg",
      description: "Very Beautiful #3 Place",
      location: {
        lat: 34,
        long: 55,
      },
      creator: "u2",
      address: "address place number #1",
    },
  ];

  render() {
    return <PlacesList places={this.places} />;
  }
}

export default UserPlaces;
