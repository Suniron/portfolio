import React from "react";
import { styled } from "../styles";
import MenuBar from "../components/MenuBar";
import Desktop from "../components/Desktop";

const PageDiv = styled.div((css) =>
  css.compose(css.h("screen"), css.w("screen"))
);

// Main
const PageIndex: React.FC = () => {
  // -- RENDER --
  return (
    <PageDiv>
      <Desktop />
      <MenuBar />
    </PageDiv>
  );
};

export default PageIndex;
