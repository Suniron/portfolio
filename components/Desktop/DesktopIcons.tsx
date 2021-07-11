import React from "react";
import { styled } from "stitches.config";
import DesktopIcon from "./DesktopIcon";

const DesktopIconsGrid = styled("div", { padding: "$4", display: "grid" });

const DesktopIcons: React.FC = () => {
  return (
    <DesktopIconsGrid>
      <DesktopIcon
        href="/files/BLANC Etienne - CV.pdf"
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
    </DesktopIconsGrid>
  );
};

export default DesktopIcons;
