import React from "react";
import { styled } from "styles/";
import DesktopIcon from "./DesktopIcon";

const DesktopIconsDiv = styled.div((css) => css.compose(css.p(4)));

const DesktopIcons: React.FC = () => {
  return (
    <DesktopIconsDiv>
      <DesktopIcon
        href="/files/BLANC Etienne - CV Developpeur.pdf"
        name="Télécharger le CV"
        svgUrl="/images/download.svg"
      />
      <DesktopIcon
        href="mailto:etienne.blanc94@gmail.com"
        name="Envoyer un email"
        svgUrl="/images/email.svg"
      />
      <DesktopIcon
        href="tel:+33788354987"
        name="Appeler"
        svgUrl="/images/call.svg"
      />
    </DesktopIconsDiv>
  );
};

export default DesktopIcons;
