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
  background:
    "linear-gradient(white,transparent,transparent,transparent,transparent,transparent)",
  backgroundColor: "#2b6cb0",
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
