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
    css.p("px"),
    css.z(10),
    css.bg("gray-100")
  )
);

const MenuBar: React.FC = () => {
  return (
    <MenuBarDiv>
      <LaunchMenu />
      <InfosAndStatus />
    </MenuBarDiv>
  );
};

export default MenuBar;
