import React, { useState } from "react";
import { styled } from "../../styles";
import LaunchMenuBox from "./LaunchMenuBox";
const LaunchMenuDiv = styled.div((css) => css.compose(css.inlineBlock()));
const LaunchButton = styled.button((css) =>
  css.compose(
    css.border(2),
    css.px(1),
    css.rounded("md"),
    css.outline("none", ":focus"),
    css.bg("gray-400"),
    css.bg("gray-500", ":hover")
  )
);

const LaunchMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const switchShowMenu = () => {
    setShowMenu(showMenu ? false : true);
  };

  return (
    <>
      <LaunchMenuDiv>
        <LaunchButton onClick={switchShowMenu}>Démarrer</LaunchButton>

        <LaunchMenuBox show={showMenu} />
      </LaunchMenuDiv>
    </>
  );
};

export default LaunchMenu;
