import React from "react";
import { styled } from "styles/";

interface DesktopIconProps {
  name: string;
  svgUrl: string;
  href?: string;
}

const IconLink = styled.a((css) =>
  css.compose(
    css.flex(),
    css.flex("col"),
    css.items("center"),
    css.py(2),
    css.text("center")
  )
);
const IconSVG = styled.img((css) => css.compose(css.w(10)));
const IconName = styled.p((css) => css.compose(css.text("white")));

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
