import React from "react";
import { styled } from "stitches.config";

// Types:
interface ModalProps {
  handleClose: () => void;
  children: JSX.Element;
  title: string;
}

// Styles:
const ModalMain = styled("div", {
  backgroundColor: "transparent",
  position: "fixed",
  width: "100%",
  height: "100%",
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
  opacity: "75%",
});

const ModalContainer = styled("div", {
  backgroundColor: "white",
  width: "90%",
  marginX: "auto",
  borderRadius: 8,
  boxShadow: "0px 5px 15px",
  zIndex: 50,
  overflowY: "auto",
  maxWidth: "xs",
});

const ModalClose = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,
  cursor: "pointer",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 20,
  marginRight: 20,
  color: "white",
  fontSize: "xs",
  zIndex: 50,
});

const CloseSvgWhite = styled("svg", { fill: "currentcolor", color: "white" });

const CloseSvgBlack = styled("svg", { fill: "currentcolor", color: "black" });

const EscSpan = styled("span", { fontSize: "xs" });

const ModalContent = styled("div", {
  paddingY: "$3",
  textAlign: "left",
  paddingX: "$3",
});

const ModalHeader = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: 15,
});

const ModalTitle = styled("p", { fontWeight: 500, fontSize: "xx-large" });

const ModalClose2 = styled("div", { cursor: "pointer", zIndex: 50 });

const ModalFooter = styled("div", {
  display: "flex",
  justifyContent: "end",
  marginTop: 15,
});

const CloseButton = styled("button", {});

// Comp
const Modal: React.FC<ModalProps> = ({ children, title, handleClose }) => {
  return (
    <ModalMain>
      <ModalOverlay></ModalOverlay>

      <ModalContainer style={{ maxHeight: "80vh" }}>
        <ModalClose onClick={handleClose}>
          <CloseSvgWhite
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </CloseSvgWhite>
          <EscSpan>(Esc)</EscSpan>
        </ModalClose>

        {/* <!-- Add margin if you want to see some of the overlay behind the modal--> */}
        <ModalContent>
          {/* <!--Header--> */}
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <ModalClose2 onClick={handleClose}>
              <CloseSvgBlack
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </CloseSvgBlack>
            </ModalClose2>
          </ModalHeader>

          {/* <!--Body--> */}
          {children}

          {/* <!--Footer--> */}
          <ModalFooter>
            <CloseButton onClick={handleClose}>Fermer</CloseButton>
          </ModalFooter>
        </ModalContent>
      </ModalContainer>
    </ModalMain>
  );
};

export default Modal;
