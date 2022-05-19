import { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  // adding the backdrop to the modal
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
  //   onClick function works on onClose function passed by App.js (later Modal.js) to close the modal on click
};

const ModalOverlay = (props) => {
  // adding the modal overlay to the modal
  return (
    <div className={classes.modal}>
      {/* everything within the modal will be affected (props.children)  */}
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

// creating portal allows us to render the modal outside of the DOM tree.
// this is useful for rendering the modal outside of the DOM tree.
// overlays is the id of the element that we want to render the modal outside of.
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    //   portalElement is the id of the element that we want to render the modal outside of.
    //  props.children is the content that we want to render inside the modal.
    // ReactDOM.createPortal is a function that takes two arguments:
    // the content that we want to render inside the modal and the element that we want to render the modal outside of.

    <Fragment>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {/* onClose function closes the cart , passed by Modal.js */}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
