import React from "react";
import { useTransition, animated, config } from "react-spring";

export default function ServiceCard({ name, img, grayscale, text }) {
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
    <div
      className="card"
      css={`
        place-self: center;
        background-color: transparent;
        position: relative;
        color: white;
        width: 350px;
        height: 450px;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        transform-style: preserve-3d;
        box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
        @media (max-width: 1200px) {
          width: 270px;
        }

        &:hover {
          transform: rotateY(0.5turn);
        }

        .card__face {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          transition: 0.5s ease-in-out;
          &--back {
            transform: rotateY(0.5turn);
          }
        }
      `}
    >
      <div className="card__face card__face--front">
        <div
          css={`
            width: 350px;
            height: 450px;
            background-color: white;
            /* border-radius: 20px; */
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
                      /* border-radius: 0px 10px 10px 0px; */
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
              /* border-radius: 20px; */
            `}
          />
        </div>
      </div>
      <div className="card__face card__face--back">
        <div
          css={`
            width: 350px;
            height: 450px;
            /* background-color: #ff3a6b; */
            /* border-radius: 20px; */
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
              position: relative;
              z-index: 3;
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
                padding: 20px;
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
              /* box-sizing: border-box; */
              position: absolute;
              z-index: 1;
            `}
          />
        </div>
      </div>
    </div>
  );
}

// Thanks to https://3dtransforms.desandro.com/card-flip

//   .scene {
//     width: 1000px;
//     display: flex;
//     justify-content: space-between;
//     perspective: 800px;

//     .card {
//   position: relative;
//   width: 240px;
//   height: 300px;
//   color: white;
//   cursor: pointer;
//   transition: 0.5s ease-in-out;
//   transform-style: preserve-3d;

//   &:hover {
//     transform: rotateY(0.5turn);
//   }

//   .card__face {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     backface-visibility: hidden;
//     transition: 0.5s ease-in-out;
//     -webkit-box-reflect: below 0
//       linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4));

//     img {
//       width: 240px;
//       height: 300px;
//       object-fit: cover;
//     }

//     &--back {
//       transform: rotateY(0.5turn);
//     }
//   }
// }
//   }
