import React from "react";
import { styled } from "styles";
import { Clock } from "./Clock";

const InfosAndStatusDiv = styled.div((css) =>
  css.compose(css.absolute(), css.right(0))
);

const InfosAndStatus: React.FC = () => {
  return (
    <InfosAndStatusDiv>
      <Clock />
    </InfosAndStatusDiv>
  );
};
export default InfosAndStatus;
