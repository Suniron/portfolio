import React from "react";
import { styled } from "stitches.config";

interface DesktopIconProps {
  name: string;
  svgUrl: string;
  href?: string;
}

const IconLink = styled.a({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  paddingY: "$2",
  textDecoration: "none",
});
const IconSVG = styled.img({ width: "2.5rem" });
const IconName = styled.p({ color: "white" });

const DesktopIcon: React.FC<DesktopIconProps> = ({ name, svgUrl, href }) => {
  return (
    <IconLink
      target="_blank"
      rel="noopener noreferrer nofollow"
      href={href ? href : ""}
      style={{ width: "7rem" }}
    >
      <IconSVG src={svgUrl} />
      <IconName style={{ textShadow: "1px 1px #000000" }}>{name}</IconName>
    </IconLink>
  );
};

export default DesktopIcon;
