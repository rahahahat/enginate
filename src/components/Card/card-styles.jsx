import styled from "styled-components";
import { animated } from "react-spring";

export const CardWrap = styled(animated.div)`
  width: 40vw;
  /* background-color: #fafafa; */
  background: rgb(32, 90, 92);
  background: linear-gradient(
    90deg,
    rgba(32, 90, 92, 1) 0%,
    rgba(35, 143, 121, 1) 100%
  );
  box-shadow: 0px 0px 20px -1px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  /* height: 90%; */
  height: fit-content;
  padding: 10px 10px 0px 10px;
`;

export const CardListItem = styled(animated.div)`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400&display=swap");
  padding: 15px 10px;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  background-color: #223131;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 1.2rem;
  color: white;
  margin-bottom: 10px;
`;
