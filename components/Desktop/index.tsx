import React from "react";
import { styled } from "stitches.config";
import DesktopIcons from "./DesktopIcons";

const DesktopDiv = styled("div", {
  width: "100%",
  height: "100vh",
  backgroundSize: "cover",
});

const Desktop: React.FC = () => {
  return (
    <>
      <DesktopDiv
        style={{ backgroundImage: "url(/images/windows-xp-background.jpg)" }}
      >
        <DesktopIcons />
      </DesktopDiv>
    </>
  );
};
export default Desktop;
