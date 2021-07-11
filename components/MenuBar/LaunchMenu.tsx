import React, { useState, useRef } from "react";
import { styled } from "stitches.config";
import LaunchMenuBox from "./LaunchMenuBox";
import { useOnClickOutside } from "utils/hooks";

const LaunchMenuDiv = styled("div", { display: "inline-block" });

const LaunchButton = styled("button", {
  paddingX: "0.5rem",
  paddingY: "0.2rem",
  display: "flex",
  alignItems: "center",
  background:
    "linear-gradient(white,transparent,transparent,transparent,transparent,transparent)",
  backgroundColor: "#38a169",
  borderTopRightRadius: 10,
  borderBottomRightRadius: 10,
  color: "white",
  fontSize: "1.25rem",
  fontWeight: 500,
  fontStyle: "italic",
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
