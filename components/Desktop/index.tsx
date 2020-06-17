import React from "react";
import { styled } from "styles";

const DesktopDiv = styled.div((css) =>
  css.compose(
    css.w("full"),
    css.h("full"),
    css.absolute(),
    css.left(0),
    css.top(0),
    css.bg("cover"),
    css.z(0)
  )
);

const BackgroundImage = styled.img((css) =>
  css.compose(css.w("full"), css.h("full"))
);

const Desktop: React.FC = () => {
  return (
    <DesktopDiv>
      <BackgroundImage src="/images/windows-xp-background.jpg" style={{}} />
    </DesktopDiv>
  );
};
export default Desktop;
