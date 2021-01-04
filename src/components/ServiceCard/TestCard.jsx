import React from "react";
import { useTransition, animated, config } from "react-spring";
import { FlipContainer, Flipper, Front, Back } from "./testCard-styles";

export default function TestCard({ name, img, text, grayscale }) {
  const [show, setShow] = React.useState(false);
  const transition = useTransition(show, null, {
    from: { transform: "translateX(-150px)", opacity: 0 },
    enter: { transform: "translateX(0px)", opacity: 1 },
    config: config.default,
  });
  React.useEffect(() => {
    document.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 300 && show == false) {
          setShow(true);
        }
      },
      false
    );
  });
  return (
    <FlipContainer>
      <Flipper>
        <Front>
          <div
            css={`
              width: 350px;
              height: 450px;
              background-color: white;
              display: flex;
              flex-direction: column;
              @media (max-width: 1200px) {
                width: 270px;
              }
            `}
          >
            <div
              css={`
                width: 350px;
                height: 100%;
                background-color: rgba(35, 87, 105, 0.3);
                position: relative;
                z-index: 10;
                @media (max-width: 1200px) {
                  width: 270px;
                }
              `}
            >
              {transition.map(
                ({ item, key, props }) =>
                  item && (
                    <animated.div
                      key={key}
                      style={props}
                      css={`
                        max-width: 85%;
                        background-color: #133b50;
                        opacity: 0.8;
                        color: #ffffff;
                        font-size: 1rem;
                        padding: 10px;
                        font-family: "Raleway";
                        font-weight: 400;
                        margin-top: 360px;
                        border-top: 2px solid #10536d;
                        border-right: 2px solid #10536d;
                        border-bottom: 2px solid #10536d;
                      `}
                    >
                      {name}
                    </animated.div>
                  )
              )}
            </div>
            <img
              src={img}
              css={`
                height: 450px;
                width: 100%;
                object-fit: cover;
                box-sizing: border-box;
                position: absolute;
                z-index: 2;
                filter: ${grayscale ? "grayscale(100%)" : null};
              `}
            />
          </div>
        </Front>
        <Back>
          <div
            css={`
              width: 350px;
              height: 450px;
              display: flex;
              flex-direction: column;
              @media (max-width: 1200px) {
                width: 270px;
              }
            `}
          >
            <div
              css={`
                width: 350px;
                height: 100%;
                background-color: rgba(25, 91, 116, 0.8);
                position: absolute;
                z-index: 200;
                @media (max-width: 1200px) {
                  width: 270px;
                }
              `}
            >
              <div
                css={`
                  color: #e6e6e6;
                  font-size: 1.2rem;
                  font-family: "Raleway";
                  position: absolute;
                  padding: 20px;
                  z-index: 300;
                `}
              >
                {text}
              </div>
            </div>
            <img
              src={img}
              css={`
                height: 450px;
                width: 100%;
                object-fit: cover;
                position: absolute;
                z-index: 1;
              `}
            />
          </div>
        </Back>
      </Flipper>
    </FlipContainer>
  );
}
