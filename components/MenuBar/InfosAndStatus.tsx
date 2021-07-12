import React from "react";
import { styled } from "stitches.config";
import { Clock } from "./Clock";

const InfosAndStatusDiv = styled("div", {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  right: 0,
  paddingX: "$1",
  background:
    "linear-gradient(white,transparent,transparent,transparent,transparent,transparent)",
  backgroundColor: "cornflowerblue",
  height: "100%",
});

const InfosAndStatus: React.FC = () => {
  return (
    <InfosAndStatusDiv>
      <Clock />
    </InfosAndStatusDiv>
  );
};
export default InfosAndStatus;
