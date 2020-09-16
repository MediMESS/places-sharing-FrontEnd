import React, { useState } from "react";

import "./PlaceItem.css";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";

const PlaceItem = (props) => {
  const [showWarningDelete, setShowWarningDelete] = useState(false);

  const [showMap, setShowMap] = useState(false);

  const openModalHandler = () => {
    setShowMap(true);
  };

  const closeModalHandler = () => {
    setShowMap(false);
  };

  const openWarningDeleteModal = () => {
    setShowWarningDelete(true);
  };

  const closeWarningDeleteModal = () => {
    setShowWarningDelete(false);
  };

  const deletePlace = () => {
    console.log("DELETING");
    closeWarningDeleteModal();
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
        <div className="map-container">
          <Map center={{ lng: -74.044502, lat: 40.689247 }} zoom={16} />
        </div>
      </Modal>

      <Modal
        show={showWarningDelete}
        cancel={closeWarningDeleteModal}
        header="Deletion Warning!"
        headerClass="bg-danger"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={closeWarningDeleteModal}>
              Cancel
            </Button>
            <Button danger onClick={deletePlace}>
              Proceed
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Are you sure you want to delete the place? This action CAN NOT BE
          UNDONE!
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info tc">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>

          <div className="place-item__actions">
            <Button inverse onClick={openModalHandler}>
              View On Map
            </Button>
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button danger onClick={openWarningDeleteModal}>
              DELETE
            </Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
