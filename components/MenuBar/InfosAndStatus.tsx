import React from "react";
import { styled } from "styles";

const InfosAndStatusDiv = styled.div((css) =>
  css.compose(css.absolute(), css.right(0))
);

const InfosAndStatus: React.FC = () => {
  return (
    <InfosAndStatusDiv>
      <p>22h31</p>
    </InfosAndStatusDiv>
  );
};
export default InfosAndStatus;
