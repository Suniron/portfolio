import React, { useState } from "react";
import { styled } from "../../styles";
import LaunchMenuBox from "./LaunchMenuBox";
const LaunchMenuDiv = styled.div((css) => css.compose(css.inlineBlock()));
const LaunchButton = styled.button((css) =>
  css.compose(
    css.border(2),
    css.px(1),
    css.rounded("sm"),
    css.outline("none", ":focus"),
    css.bg("gray-500"),
    css.bg("gray-600", ":hover")
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

        <LaunchMenuBox show={showMenu} setShow={setShowMenu} />
      </LaunchMenuDiv>
    </>
  );
};

export default LaunchMenu;
