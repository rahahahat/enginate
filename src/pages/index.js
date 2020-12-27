import React from "react";
import Navbar from "../components/navbar/Navbar";
import Layout from "../common-styles/layout-styles";
import { Section, Text, TestLogo } from "../common-styles/section-styles";
import Card from "../components/Card/card";
import Carousal from "../components/Carsousal/carousal";
import Settings from "../../static/images/icons8-settings.svg";
const Home = () => {
  return (
    <>
      <Navbar selected={"Home"} />
      <Layout>
        <Section bg="#e9e9e9" height="700px" justifyCont="space-around">
          <Text>
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
                line-height
              `}
            >
              CONSULTANTS
            </span>
          </Text>
          <Carousal />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 200"
            css={`
              position: absolute;
              bottom: 0;
              z-index: 3;
            `}
          >
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,256L40,218.7C80,181,160,107,240,101.3C320,96,400,160,480,181.3C560,203,640,181,720,149.3C800,117,880,75,960,69.3C1040,64,1120,96,1200,117.3C1280,139,1360,149,1400,154.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 250"
            css={`
              position: absolute;
              bottom: 0;
              z-index: 2;
            `}
          >
            <path
              fill="#ffffff"
              fill-opacity="0.4"
              d="M0,128L26.7,154.7C53.3,181,107,235,160,224C213.3,213,267,139,320,128C373.3,117,427,171,480,197.3C533.3,224,587,224,640,186.7C693.3,149,747,75,800,85.3C853.3,96,907,192,960,218.7C1013.3,245,1067,203,1120,181.3C1173.3,160,1227,160,1280,154.7C1333.3,149,1387,139,1413,133.3L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
            ></path>
          </svg>
          <img
            src="https://img.icons8.com/ios/700/000000/measurement-tool.png"
            css={`
              position: absolute;
              z-index: 0;
              opacity: 0.1;
              height: 200px;
              width: 200px;
              left: 750px;
              top: 20px;
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
              top: 470px;
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
        <Section height="1000px" padding="50px">
          <Card />
        </Section>
        <Section bg="red" height="600px"></Section>
      </Layout>
    </>
  );
};

export default Home;
