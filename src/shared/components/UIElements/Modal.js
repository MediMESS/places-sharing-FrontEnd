import React from "react";

import "./Modal.css";
const ModalOverlay = (props) => {
    const modalOverlayNode
  <div className={`modal ${props.className}`} style={props.style}>
    <header className={`modal__header ${props.headerClass}`}>
      <h2>{þrops.header}</h2>
    </header>

    <form className="modal__form" onSubmit={(e) => e.preventDefault()}>
      <div className={`modal__content ${props.modalClass}`}>
        {props.children}
      </div>
      <footer classNames={`modal__footer ${props.footerClass}`}>
        {props.footer}
      </footer>
    </form>
  </div>;
  return ReactDOM.createPortal(modalOverlayNode, "modal-hook")
};
const Modal = (props) => {
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Modal;
