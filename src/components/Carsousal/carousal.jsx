import React from "react";
import {
  CarousalWrapper,
  CarousalHover,
  IconWrap,
  IconLeft,
  IconRight,
  //   Image,
} from "./carousal-styles";
import "../../index.css";

const Carousal = ({}) => {
  // const [img, setImg] = React.useState(0);
  // React.useEffect(() => {
  //   const time = setTimeout(() => {
  //     setImg((img) => {
  //       return (img + 1) % 2;
  //     });
  //   }, 4000);
  //   return () => {
  //     clearTimeout(time);
  //   };
  // });
  return (
    <CarousalWrapper src={require(`../../../static/images/1.jpg`)}>
      {/* <Image src={require(`../../../static/images/${img}.jpg`)} /> */}
      <CarousalHover className="caro-hover">
        <IconWrap>
          <IconLeft />
        </IconWrap>
        <IconWrap>
          <IconRight />
        </IconWrap>
      </CarousalHover>
    </CarousalWrapper>
  );
};

export default Carousal;
