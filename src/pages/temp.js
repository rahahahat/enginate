import React from "react";
import Navbar from "../components/navbar/Navbar";
import Layout from "../common-styles/layout-styles";
import { Section, Textt, TestLogo } from "../common-styles/section-styles";
import Card from "../components/Card/card";
import Tooltip from "../components/Tooltip/tooltip.jsx";
import Carousal from "../components/Carsousal/carousal";
import servicesGraphic from "../../static/images/servicesGraphic.png";
import { useTransition, animated } from "react-spring";
const Home = () => {
  const [show, setShow] = React.useState(false);
  const imgTransition = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    duration: 350,
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
    <>
      <Navbar selected={"Home"} />
      <Layout>
        <Section bg="#e9e9e9" height="850px" justifyCont="space-around">
          <Textt>
            <span
              css={`
                font-size: 9rem;
                display: block;
                margin-bottom: -45px;
              `}
            >
              ENGINATE
            </span>
            <span
              css={`
                font-size: 6.2rem;
                display: block;
              `}
            >
              CONSULTANTS
            </span>
          </Textt>
          <Carousal />
          <div
            class="custom-shape-divider-bottom-1609157053"
            css={`
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              overflow: hidden;
              line-height: 0;
              transform: rotate(180deg);
            `}
          >
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              css={`
                position: relative;
                display: block;
                width: calc(100% + 1.3px);
                height: 110px;
              `}
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                class="shape-fill"
                css={`
                  fill: #ffffff;
                `}
              ></path>
            </svg>
          </div>
          <img
            src="https://img.icons8.com/ios/700/000000/measurement-tool.png"
            css={`
              position: absolute;
              z-index: 0;
              opacity: 0.1;
              height: 200px;
              width: 200px;
              left: 750px;
              top: 90px;
              transform: rotate(0);
            `}
          />
          <img
            src="https://img.icons8.com/metro/200/000000/ruler.png"
            css={`
              position: absolute;
              z-index: 0;
              opacity: 0.1;
              height: 150px;
              width: 150px;
              left: 100px;
              top: 550px;
              transform: rotate(45);
            `}
          />
          <img
            src="https://img.icons8.com/pastel-glyph/200/000000/stationery--v2.png"
            css={`
              position: absolute;
              z-index: 0;
              opacity: 0.1;
              height: 150px;
              width: 150px;
              left: 50px;
              top: 0px;
              transform: rotate(180deg);
            `}
          />
        </Section>
        <Section padding="45px" height="800px" justifyCont="space-around">
          <Card />
          <div
            css={`
              height: 100%;
              width: 40vw;
            `}
          >
            {imgTransition.map(
              ({ item, key, props }) =>
                item && (
                  <animated.div style={props}>
                    <img
                      src={servicesGraphic}
                      css={`
                        position: relative;
                        right: 30px;
                        top: 50px;
                        z-index: 1;
                        opacity: 0.5;
                      `}
                    />
                    <div
                      css={`
                        position: absolute;
                        z-index: 2;
                        top: 130px;
                        color: #242424;
                      `}
                    >
                      <span
                        css={`
                          display: block;
                          font-family: "Bebas Neue", cursive;
                          font-size: 11rem;
                          margin-bottom: -75px;
                        `}
                      >
                        OUR
                      </span>
                      <span
                        css={`
                          display: block;
                          font-family: "Bebas Neue", cursive;
                          font-size: 11rem;
                        `}
                      >
                        SERVICES
                      </span>
                      <span
                        css={`
                          display: block;
                          font-family: "Bebas Neue", cursive;
                          font-size: 1.8rem;
                          position: absolute;
                          top: 300px;
                        `}
                      >
                        At Enginate we Endeavor to deliver world class services
                      </span>
                    </div>
                  </animated.div>
                )
            )}
          </div>
        </Section>
        <Section bg="red" height="600px"></Section>
      </Layout>
    </>
  );
};

export default Home;
