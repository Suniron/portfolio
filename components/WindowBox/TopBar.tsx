import React from "react";
import { styled } from "stitches.config";

interface TopBarProps {
  onClose: () => void;
  title: string;
}
const TopBarDiv = styled("div", {
  padding: "$1",
  display: "flex",
  justifyContent: "space-between",
  position: "sticky",
  top: 0,
  backgroundColor: "#4299e1",
});

const Title = styled("h3", {
  color: "white",
  fontSize: "xl",
  fontWeight: 600,
  paddingX: "$1",
});

const CloseSvg = styled("svg", {
  fill: "white",
  backgroundColor: "orangered",
  cursor: "pointer",
  borderWidth: 2,
  "&:hover": { backgroundColor: "red" },
});

const TopBar: React.FC<TopBarProps> = ({ onClose, title }) => {
  return (
    <TopBarDiv>
      <Title>{title}</Title>
      <CloseSvg
        onClick={onClose}
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 18 18"
      >
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
      </CloseSvg>
    </TopBarDiv>
  );
};

export default TopBar;
