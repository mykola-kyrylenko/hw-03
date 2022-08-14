import React, { Component } from 'react';
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  };

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  };

  handleKeydown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };


  handleOverlayClick = (e) => {
    const overlay = document.querySelector(".Overlay");

    if (e.target === overlay) {
      this.props.onClose();
    }
  };



  render() {
    return createPortal(
        <div className="Overlay" onClick={this.handleOverlayClick}>
            <div className="modal">
            <img src={this.props.img.largeImageURL} alt={this.props.img.tags}/>
            </div>
      </div>,
      modalRoot
    );
  }
}
