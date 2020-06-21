import React from "react";
import { styled } from "styles";
import { Clock } from "./Clock";

const InfosAndStatusDiv = styled.div((css) =>
  css.compose(css.absolute(), css.right(0), css.px(1), css.bg("blue-500"))
);

const InfosAndStatus: React.FC = () => {
  return (
    <InfosAndStatusDiv className="radiant">
      <Clock />
    </InfosAndStatusDiv>
  );
};
export default InfosAndStatus;
