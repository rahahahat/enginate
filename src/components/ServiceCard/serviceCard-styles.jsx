import styled from "styled-components";

export const FlipContainer = styled.div`
  perspective: 1000px;
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
  @media (max-width: 1200px) {
    width: 270px;
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
  @media (max-width: 1200px) {
    width: 270px;
  }
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
  @media (max-width: 1200px) {
    width: 270px;
  }
`;
