import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const CarousalWrapper = styled.div`
  position: relative;
  align-self: center;
  background-color: #d8d8d8;
  height: 550px;
  width: 900px;
  /* left: 350px; */
  &:hover > .caro-hover {
    display: flex;
  }
  border-radius: 10px;
  box-sizing: border-box;
  z-index: 200;
  transition: background 0.4s ease-in-out;
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.5);
  background: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
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
