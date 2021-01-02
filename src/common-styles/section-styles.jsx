import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ bg }) => bg || "white"};
  position: relative;
  height: ${({ height }) => height || "fit-content"};
  display: ${({ display }) => display || "block"};
  justify-content: ${({ justifyCont }) => justifyCont || null};
  padding: ${({ padding }) => padding || null};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  width: 100vw;
  margin: ${({ margin }) => margin || null};
  box-sizing: border-box;
`;

export const Textt = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600&display=swap");
  height: fit-content;
  width: fit-content;
  align-self: center;
  font-family: "Roboto Condensed", sans-serif;
  text-align: center;
  color: #252525;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: -25px;
`;
