import React from "react";
import { styled } from "../styles";
import MenuBar from "../components/MenuBar";

// Styles
const BackgroundImage = styled.div((css) =>
  css.compose(css.w("screen"), css.h("screen"))
);

// Main
const PageIndex: React.FC = () => {
  // -- RENDER --
  return (
    <BackgroundImage
      style={{
        backgroundImage: "url(/images/windows-xp-background.jpg)",
      }}
    >
      <MenuBar />
    </BackgroundImage>
  );
};

export default PageIndex;
