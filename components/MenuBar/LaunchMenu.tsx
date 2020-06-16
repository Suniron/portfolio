import React, { useState } from "react";
import { styled } from "../../styles";

const LaunchMenuDiv = styled.div((css) =>
  css.compose(css.relative(), css.inlineBlock())
);
const LaunchButton = styled.button((css) =>
  css.compose(
    css.border(2),
    css.px(1),
    css.outline("none", ":focus"),
    css.bg("gray-300")
  )
);
const LaunchContentDiv = styled.div((css) =>
  css.compose(
    css.absolute(),
    css.bg("white"),
    css.ml("px"),
    css.mb("px"),
    css.p(2),
    css.rounded("md")
  )
);

const LaunchMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const switchShowMenu = () => {
    setShowMenu(showMenu ? false : true);
  };

  return (
    <>
      <LaunchMenuDiv onBlur={() => setShowMenu(false)}>
        <LaunchButton onClick={switchShowMenu}>Démarrer</LaunchButton>
        <LaunchContentDiv
          style={{ bottom: "2.27em", display: showMenu ? "" : "none" }}
        >
          <p>ELEMENT</p>
          <p>ELEMENT</p>
          <p>ELEMENT</p>
          <p>ELEMENT</p>
        </LaunchContentDiv>
      </LaunchMenuDiv>
    </>
  );
};

export default LaunchMenu;
