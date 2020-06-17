import React, { useState } from "react";
import { styled } from "../../styles";

const LaunchMenuDiv = styled.div((css) =>
  css.compose(css.relative(), css.inlineBlock())
);
const LaunchButton = styled.button((css) =>
  css.compose(
    css.border(2),
    css.px(1),
    css.rounded("md"),
    css.bg("gray-500"),
    css.outline("none", ":focus"),
    css.bg("gray-600", ":hover")
  )
);
const LaunchContentDiv = styled.div((css) =>
  css.compose(css.absolute(), css.bg("gray-200"), css.p(2), css.rounded("md"))
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
          style={{ bottom: "2em", display: showMenu ? "" : "none" }}
        >
          <p>ELEMENT</p>
          <p>ELEMENT</p>
          <p>ELEMENT</p>
          <p>ELEMENT</p>
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
