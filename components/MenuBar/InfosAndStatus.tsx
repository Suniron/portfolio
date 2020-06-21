import React from "react";
import { styled } from "styles";
import { Clock } from "./Clock";

const InfosAndStatusDiv = styled.div((css) =>
  css.compose(
    css.absolute(),
    css.flex(),
    css.items("center"),
    css.right(0),
    css.px(1),
    css.bg("blue-500"),
    css.h("full")
  )
);

const InfosAndStatus: React.FC = () => {
  return (
    <InfosAndStatusDiv className="radient">
      <Clock />
    </InfosAndStatusDiv>
  );
};
export default InfosAndStatus;
