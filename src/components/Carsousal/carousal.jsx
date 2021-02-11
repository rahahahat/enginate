import React from "react";
import logo2 from "../../../public/images/logo-light.png";
import img0 from "../../../public/images/0.jpg";
import img1 from "../../../public/images/1.jpg";
import img2 from "../../../public/images/2.jpg";
import img3 from "../../../public/images/3.jpg";
import img5 from "../../../public/images/5.jpg";
import img6 from "../../../public/images/6.jpg";
import img7 from "../../../public/images/7.jpg";
import img8 from "../../../public/images/8.jpg";
import img9 from "../../../public/images/9.jpg";
import img10 from "../../../public/images/10.jpg";
import { useTransition, animated, config } from "react-spring";

const imgs = [img0, img1, img2, img3, img5, img6, img7, img8, img9, img10];

const Carousal = ({}) => {
  const [img, setImg] = React.useState(0);
  React.useEffect(() => {
    const time = setTimeout(() => {
      setImg((img) => {
        return (img + 1) % 10;
      });
    }, 5000);
    return () => {
      clearTimeout(time);
    };
  });
  const transitions = useTransition(imgs[img], (item) => item, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle,
  });
  return (
    <div
      css={`
        width: 100vw;
        height: 800px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        @media (max-width: 800px) {
          height: 600px;
        }
        @media (max-width: 650px) {
          height: 500px;
        }
        @media (max-width: 450px) {
          height: 350px;
        }
      `}
    >
      {transitions.map(({ item, key, props }) => {
        return (
          <animated.img
            key={key}
            src={item}
            style={props}
            css={`
              width: 100vw;
              height: 800px;
              box-sizing: border-box;
              position: absolute;
              top: 0;
              left: 0;
              filter: grayscale(100%);
              @media (max-width: 800px) {
                height: 600px;
              }
              @media (max-width: 650px) {
                height: 500px;
              }
              @media (max-width: 450px) {
                height: 350px;
              }
            `}
          />
        );
      })}

      <div
        css={`
          background-color: #2c5b77;
          width: 100vw;
          height: 800px;
          top: 0;
          display: flex;
          position: absolute;
          z-index: 1;
          box-sizing: border-box;
          opacity: 0.6;
          @media (max-width: 800px) {
            height: 600px;
          }
          @media (max-width: 650px) {
            height: 500px;
          }
          @media (max-width: 450px) {
            height: 350px;
          }
        `}
      />
      <animated.img
        src={logo2}
        css={`
          display: flex;
          align-self: center;
          width: 25vw;
          position: relative;
          z-index: 10;
          @media (max-width: 1100px) {
            width: 40vw;
          }
          @media (max-width: 650px) {
            width: 45vw;
          }
          @media (max-width: 400px) {
            width: 60vw;
          }
        `}
      />
    </div>
  );
};

export default Carousal;
