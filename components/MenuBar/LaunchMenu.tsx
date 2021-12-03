import React, { useState, useRef } from "react";
import { styled } from "stitches.config";
import LaunchMenuBox from "./LaunchMenuBox";
import { useOnClickOutside } from "utils/hooks";

const LaunchMenuDiv = styled("div", { display: "inline-block" });

const LaunchButton = styled("button", {
  paddingX: "0.5rem",
  paddingY: "0.2rem",
  width: 140,
  display: "flex",
  alignItems: "center",
  boxShadow:
    "inset 0px 0px 5px 0px darkgreen, inset 0px 2px 5px white, inset 0px -5px 10px darkslategrey",
  background:
    "linear-gradient(white,transparent,transparent,transparent,transparent,transparent)",
  backgroundColor: "#38a169",
  borderTopRightRadius: 8,
  borderBottomRightRadius: 8,
  color: "white",
  fontSize: "1.25rem",
  fontWeight: 500,
  fontStyle: "italic",
  lineHeight: "normal",
  fontFamily: "system-ui",
  "&:focus": {
    outline: "none",
  },
  "&:hover": { backgroundColor: "#2f855a" },
});
const WindowsLogo = styled("img", { height: "1.5rem" });

const LaunchMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const ref = useRef(null);
  useOnClickOutside(ref, () => setShowMenu(false));

  const toggleShowMenu = () => {
    setShowMenu(showMenu ? false : true);
  };

  return (
    <>
      <div ref={ref}>
        <LaunchMenuDiv>
          <LaunchButton onClick={toggleShowMenu}>
            <WindowsLogo src="/images/windowsLogo.png" />
            Démarrer
          </LaunchButton>

          <LaunchMenuBox show={showMenu} />
        </LaunchMenuDiv>
      </div>
    </>
  );
};

export default LaunchMenu;
