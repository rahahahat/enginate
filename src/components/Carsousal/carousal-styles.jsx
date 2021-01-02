import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const CarousalWrapper = styled.div`
  position: relative;
  align-self: center;
  background-color: #d8d8d8;
  width: fit-content;
  height: fit-content;
  &:hover > .caro-hover {
    display: flex;
  }
  border-radius: 10px;
  box-sizing: border-box;
  z-index: 5;
  box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.4);
`;

export const BgImg = styled.img`
  width: 75vw;
  opacity: 0.6;
  border-radius: 10px;
`;
export const CarousalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  background-color: rgba(81, 137, 156, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-sizing: border-box;
  top: 0;
  left: 0;
`;
export const CarousalOverlayText = styled.div`
  align-self: center;
  text-align: center;
  position: relative;
  padding: 0px 60px;
  color: #3b3b3b;
`;

export const Logo2 = styled.img`
  align-self: center;
  display: block;
  width: 10vw;
  height: 8vw;
  position: relative;
  top: 35px;
  display: inline;
`;
export const Logo1 = styled.img`
  align-self: center;
  display: block;
  width: 26vw;
  /* height: 20vw; */
  /* position: relative;
  top: 35px;
  display: inline; */
`;
export const CarousalHover = styled.div`
  position: absolute;
  height: 550px;
  width: 900px;
  top: 0;
  left: 0;
  background-color: RGBA(0, 0, 0, 0.2);
  display: none;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
`;

export const IconWrap = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;
  width: 50px;
  background-color: transparent;
`;

export const IconLeft = styled(MdKeyboardArrowLeft)`
  align-self: center;
  font-size: 3rem;
  color: white;
`;

export const IconRight = styled(MdKeyboardArrowRight)`
  align-self: center;
  font-size: 3rem;
  color: white;
`;

// export const Image = styled.img`
//   border-radius: 10px;
//   display: block;
//   height: 100%;
//   width: 900px;
//   box-sizing: border-box;
//   transition: 0.5s ease-in-out;
// `;
