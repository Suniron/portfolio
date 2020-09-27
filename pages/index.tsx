import React from "react";
import MenuBar from "../components/MenuBar";
import Desktop from "../components/Desktop";
import { styled } from "stitches.config";

const PageDiv = styled.div({});

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
