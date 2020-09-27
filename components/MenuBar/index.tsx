import React from "react";
import { styled } from "stitches.config";
import LaunchMenu from "./LaunchMenu";
import InfosAndStatus from "./InfosAndStatus";

const MenuBarDiv = styled.div({
  position: "fixed",
  bottom: 0,
  display: "flex",
  alignItems: "center",
  width: "100%",
  zIndex: 10,
  backgroundColor: "#2b6cb0",
});

const MenuBar: React.FC = () => {
  return (
    <MenuBarDiv className="radient">
      <LaunchMenu />
      <InfosAndStatus />
    </MenuBarDiv>
  );
};

export default MenuBar;
