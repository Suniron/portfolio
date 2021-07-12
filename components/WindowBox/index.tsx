import React from "react";
import { styled } from "stitches.config";
import TopBar from "./TopBar";

// Types:
interface ModalProps {
  handleClose: () => void;
  children: JSX.Element;
  title: string;
  show: boolean;
}

// Styles:
const ModalMain = styled("div", {
  backgroundColor: "transparent",
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10,
});

const ModalOverlay = styled("div", {
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundColor: "black",
  opacity: "50%",
});

const ModalContainer = styled("div", {
  backgroundColor: "royalblue",
  width: "90%",
  marginX: "auto",
  boxShadow: "0px 5px 15px",
  zIndex: 50,
  overflowY: "auto",
  maxWidth: "90%",
  maxHeight: "80vh",
  tablet: { width: "75%" },
});

const ModalBody = styled("div", {
  backgroundColor: "white",
  paddingX: "$1",
  minHeight: "60vh",
});

// Comp
const Modal: React.FC<ModalProps> = ({
  children,
  title,
  handleClose,
  show,
}) => {
  return (
    <ModalMain style={{ display: show ? "" : "none" }}>
      <ModalOverlay />

      <ModalContainer id="modal-container">
        {/* <!--Header--> */}
        <TopBar onClose={handleClose} title={title} />

        {/* <!--Body--> */}
        <ModalBody id="modal-body">{children}</ModalBody>
      </ModalContainer>
    </ModalMain>
  );
};

export default Modal;
