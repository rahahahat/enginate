import styled from "styled-components";

export const FlipContainer = styled.div`
  perspective: 500px;
`;
export const Flipper = styled.div`
  width: 350px;
  height: 450px;
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
  :hover {
    transform: rotateY(180deg);
  }
`;
export const Front = styled.div`
  width: 350px;
  height: 450px;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: red;
  transform: rotateY(0deg);
`;
export const Back = styled.div`
  width: 350px;
  height: 450px;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00ccff;
  transform: rotateY(180deg);
`;
