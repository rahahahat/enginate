import React from "react";
import { FlipContainer, Flipper, Front, Back } from "./testCard-styles";
export default function TestCard() {
  return (
    <FlipContainer>
      <Flipper>
        <Front>Front</Front>
        <Back>Back</Back>
      </Flipper>
    </FlipContainer>
  );
}
