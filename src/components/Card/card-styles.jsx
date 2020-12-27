import styled from "styled-components";
import { animated } from "react-spring";
import { BsQuestionSquare } from "react-icons/bs";
export const CardWrap = styled(animated.div)`
  width: 40vw;
  /* background-color: #fafafa; */
  background: rgb(32, 90, 92);
  background: linear-gradient(
    90deg,
    rgba(32, 90, 92, 1) 0%,
    rgba(35, 143, 121, 1) 100%
  );
  box-shadow: 0px 0px 20px -1px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  /* height: 90%; */
  height: fit-content;
  padding: 10px 10px 0px 10px;
`;

export const CardItemWrap = styled(animated.div)`
  padding: 15px 10px;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  background-color: #223131;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 1.2rem;
  color: white;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const CardItem = styled.div`
  height: fit-content;
  width: fit-content;
  align-self: center;
`;

export const QuestionMarkIcon = styled(BsQuestionSquare)`
  height: fit-content;
  width: fit-content;
  align-self: center;
  transition: 0.2s ease;
  :hover {
    color: #17a398;
  }
`;
