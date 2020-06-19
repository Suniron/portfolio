import React from "react";
import { styled } from "styles";
import DesktopIcons from "./DesktopIcons";

const DesktopDiv = styled.div((css) =>
  css.compose(css.w("full"), css.h("full"), css.bg("cover"))
);

const BackgroundImage = styled.img((css) =>
  css.compose(
    css.w("screen"),
    css.h("screen"),
    css.left(0),
    css.top(0),
    css.z(0)
  )
);

const Desktop: React.FC = () => {
  return (
    <>
      <DesktopDiv
        style={{ backgroundImage: "url(/images/windows-xp-background.jpg)" }}
      >
        <DesktopIcons />
        {/* <BackgroundImage
          src="/images/windows-xp-background.jpg"
          alt="Windows XP background"
        /> */}
      </DesktopDiv>
    </>
  );
};
export default Desktop;
