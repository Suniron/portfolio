import React from "react";
import { styled } from "../../styles";
import LaunchMenu from "./LaunchMenu";
import InfosAndStatus from "./InfosAndStatus";

const MenuBarDiv = styled.div((css) =>
  css.compose(
    css.fixed(),
    css.bottom(0),
    css.flex(),
    css.items("center"),
    css.w("full"),
    css.z(10),
    css.bg("blue-700")
  )
);

const MenuBar: React.FC = () => {
  return (
    <MenuBarDiv className="radiant">
      <LaunchMenu />
      <InfosAndStatus />
    </MenuBarDiv>
  );
};

export default MenuBar;
