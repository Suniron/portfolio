import React from "react";
import { styled } from "styles";
import TopBar from "./TopBar";

// Types:
interface ModalProps {
  handleClose: () => void;
  children: JSX.Element;
  title: string;
  show: boolean;
}

// Styles:
const ModalMain = styled.div((css) =>
  css.compose(
    css.bg("transparent"),
    css.fixed(),
    css.w("full"),
    css.h("full"),
    css.top(0),
    css.left(0),
    css.flex(),
    css.items("center"),
    css.justify("center"),
    css.z(10)
  )
);

const ModalOverlay = styled.div((css) =>
  css.compose(
    css.absolute(),
    css.w("full"),
    css.h("full"),
    css.bg("black"),
    css.opacity(50)
  )
);

const ModalContainer = styled.div((css) =>
  css.compose(
    css.bg("blue-500"),
    css.w("11/12"),
    css.tablet.w("3/4"),

    css.mx("auto"),
    css.rounded("sm"),
    css.shadow("lg"),
    css.z(50),
    css.overflowY("auto"),
    css.maxW("screen-sm")
  )
);

const ModalContent = styled.div((css) => css.compose(css.text("left")));

const ModalBody = styled.div((css) => css.compose(css.bg("white"), css.px(1)));

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

      <ModalContainer style={{ maxHeight: "80vh", padding: "0.2em" }}>
        {/* <!-- Add margin if you want to see some of the overlay behind the modal--> */}
        <ModalContent>
          {/* <!--Header--> */}
          <TopBar onClose={handleClose} title={title} />

          {/* <!--Body--> */}
          <ModalBody style={{ minHeight: "60vh" }}>{children}</ModalBody>

          {/* <!--Footer--> */}
        </ModalContent>
      </ModalContainer>
    </ModalMain>
  );
};

export default Modal;
