import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";
import Backdrop from "../UIElements/Backdrop";
import { CSSTransition } from "react-transition-group";

const ModalOverlay = (props) => {
  const modalOverlayNode = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>

      <form
        onSubmit={props.onSubmit ? props.onSubmit : (e) => e.preventDefault()}
      >
        <div className={`modal__content ${props.modalClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(
    modalOverlayNode,
    document.getElementById("modal-hook")
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.cancel} />}
      <CSSTransition
        in={props.show}
        timeout={300}
        classNames="modal"
        mountOnEnter
        unmountOnExit
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
