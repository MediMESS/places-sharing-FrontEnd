import React, { Component } from "react";

class PlaceItem extends Component {
  render(props) {
    return (
      <li className="place-item">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
      </li>
    );
  }
}

export default PlaceItem;
