import React from "react";
import { styled } from "styles";

interface TopBarProps {
  onClose: () => void;
  title: string;
}
const TopBarDiv = styled.div((css) => css.compose(css.flex()));

const Title = styled.h3((css) =>
  css.compose(css.text("white"), css.text("xl"), css.font("medium"), css.px(1))
);

const CloseSvg = styled.svg((css) =>
  css.compose(
    css.self("center"),
    css.fill("current"),
    css.text("white"),
    css.rounded("sm"),
    css.cursor("pointer"),
    css.border(2),
    css.bg("red-500"),
    css.border("white"),
    css.z(50),
    css.mx(1),
    css.bg("red-700", ":hover")
  )
);

const TopBar: React.FC<TopBarProps> = ({ onClose, title }) => {
  return (
    <TopBarDiv style={{ justifyContent: "space-between" }}>
      <Title>{title}</Title>
      <CloseSvg
        onClick={onClose}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
      </CloseSvg>
    </TopBarDiv>
  );
};

export default TopBar;
