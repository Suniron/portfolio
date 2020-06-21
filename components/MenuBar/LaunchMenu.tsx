import React, { useState } from "react";
import { styled } from "../../styles";
import LaunchMenuBox from "./LaunchMenuBox";
const LaunchMenuDiv = styled.div((css) => css.compose(css.inlineBlock()));
const LaunchButton = styled.button((css) =>
  css.compose(
    css.px(2),
    css.roundedR("full"),
    css.outline("none", ":focus"),
    css.bg("green-600"),
    css.bg("green-700", ":hover"),
    css.text("white"),
    css.text("xl"),
    css.font("medium"),
    css.italic()
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
        <LaunchButton onClick={switchShowMenu} className="radiant">
          Démarrer
        </LaunchButton>

        <LaunchMenuBox show={showMenu} setShow={setShowMenu} />
      </LaunchMenuDiv>
    </>
  );
};

export default LaunchMenu;
