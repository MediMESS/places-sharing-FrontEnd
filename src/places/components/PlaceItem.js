import React, { useState } from "react";

import "./PlaceItem.css";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openModalHandler = () => {
    setShowMap(true);
  };

  const closeModalHandler = () => {
    setShowMap(false);
  };
  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeModalHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeModalHandler}>Close Map</Button>}
      >
        <div className="map-container"></div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info tc">
            <h2>{props.title}</h2>
            <h2>{props.address}</h2>
            <p>{props.description}</p>
          </div>

          <div className="place-item__actions">
            <Button inverse onClick={openModalHandler}>
              View On Map
            </Button>
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
