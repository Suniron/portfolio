import React from "react";
import { styled } from "styles";

const DesktopDiv = styled.div((css) =>
  css.compose(css.w("full"), css.h("full"), css.left(0), css.top(0), css.z(0))
);

const BackgroundImage = styled.img((css) =>
  css.compose(css.w("full"), css.h("full"))
);

const Desktop: React.FC = () => {
  return (
    <DesktopDiv>
      <BackgroundImage
        src="/images/windows-xp-background.jpg"
        alt="Windows XP background"
      />
    </DesktopDiv>
  );
};
export default Desktop;
