import React from "react";
import { styled } from "stitches.config";
import LaunchMenu from "./LaunchMenu";
import InfosAndStatus from "./InfosAndStatus";

const MenuBarDiv = styled("div", {
  position: "fixed",
  bottom: 0,
  display: "flex",
  alignItems: "center",
  width: "100%",
  zIndex: 10,
  boxShadow: "inset 0px 2px 5px white, inset 0px -5px 10px darkslategrey",
  backgroundColor: "royalblue",
});

const MenuBar: React.FC = () => {
  return (
    <MenuBarDiv>
      <LaunchMenu />
      <InfosAndStatus />
    </MenuBarDiv>
  );
};

export default MenuBar;
