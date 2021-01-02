import React from "react";
import Layout from "../../common-styles/layout-styles";
import Navbar from "../../components/navbar/Navbar";
import { Section } from "../../common-styles/section-styles";
import { Input } from "antd";
import Carousal from "../../components/Carsousal/carousal";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import SectorCard from "../../components/SectorCard/SectorCard";
import logoDark from "../../../static/images/BuildingsDarkTransparent.png";
import logoLight from "../../../static/images/logo-light.png";
import Footer from "../../components/Footer/footer";
import s1 from "../../../static/images/s1.jpg";
import s2 from "../../../static/images/s2.jpg";
import s3 from "../../../static/images/s3-bridge.jpg";
import s4 from "../../../static/images/s4-onsite.jpg";
import s5 from "../../../static/images/s5.png";
import s6 from "../../../static/images/s6.png";
import s7 from "../../../static/images/s7.jpg";
import s8 from "../../../static/images/s8.png";
import s9 from "../../../static/images/s9.png";
import s10 from "../../../static/images/s10.jpg";
// import Flippy, { FrontSide, BackSide } from "react-flippy";
import "../../index.css";
export default function Home() {
  return (
    <>
      <Navbar selected="Home" />
      <Layout>
        <Section padding="0px" display="flex">
          <Carousal />
        </Section>
        <Section
          flexDir="column"
          display="flex"
          justifyCont="center"
          padding="3vw"
          bg="#eeeeee"
        >
          <div
            css={`
              font-size: 6rem;
              font-family: "Bebas Neue";
              align-self: center;
              margin-bottom: 10px;
            `}
          >
            About Us
          </div>
          <div
            css={`
              align-self: center;
              width: 80%;
              font-weight: 400;
              position: relative;
              display: flex;
              justify-content: center;
              @media (max-width: 500px) {
                width: 90%;
                font-size: 1.1;
              }
            `}
          >
            {/* <img
              css={`
                position: absolute;
                opacity: 0.2;
                align-self: center;
              `}
              src="https://img.icons8.com/nolan/280/about.png"
            /> */}
            <div
              css={`
                font-size: 1.5rem;
                font-family: "Raleway";
                /* background-color: red; */
                font-weight: 400;
                position: relative;
                justify-content: center;
                text-align: justify;
                width: 100%;
                @media (max-width: 500px) {
                  width: 90%;
                  font-size: 1.1;
                }
              `}
            >
              We are an innovative, forward thinking engineering consultancy
              specializing in Civil & Structural Engineering services across all
              sectors. <br /> <br /> We work alongside architects, developers,
              end users, designers and contractors on new build and
              refurbishment projects alike and collaborate with a single aim to
              achieve the best results and deliver a consistent, high quality
              service for our clients.
              <br /> <br />
              Our success as a company is based on us delivering value for money
              to our clients. We all have a part to play in maintaining the
              standards of technical excellence and good governance set out in
              our delivery Principles; the principles which enhance our
              reputation.
              <br /> <br />
              We care about each other and we care about our clients. We care
              about the quality of the solutions we deliver, the services we
              provide, and the world in which we live and work. But above all,
              we care about our future. We work hard to protect our reputation
              and safeguard our future, setting high standards for ourselves in
              everything we do, every day.
            </div>
          </div>
        </Section>
        <Section padding="5vw" flexDir="column" display="flex">
          <div
            css={`
              text-align: center;
              font-size: 6rem;
              font-family: "Bebas Neue";
              color: #242424;
              box-sizing: border-box;
              margin-bottom: 20px;
              @media (max-width: 650px) {
                font-size: 20vw;
              }
              @media (max-width: 500px) {
                font-size: 17.5vw;
              }
            `}
          >
            OUR SERVICES
          </div>
          <div
            css={`
              font-family: "Raleway";
              color: #242424;
              box-sizing: border-box;
              text-align: justify;
              font-size: 1.5rem;
              width: 83%;
              align-self: center;
              margin-bottom: 50px;
              @media (max-width: 1400px) {
                width: 80%;
                font-size: 1.2rem;
              }
              @media (max-width: 600px) {
                width: 95%;
                font-size: 1.2rem;
              }
            `}
          >
            The services we provide are built around the skills and expertise of
            our workforce. Our culture and the way we work determine whether
            clients and partners want to do business with us, and whether
            talented people choose a career with us.
          </div>
          <div
            css={`
              width: 85%;
              align-self: center;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              row-gap: 2rem;
              column-gap: 10px;
              justify-items: center;
              box-sizing: border-box;
              @media (max-width: 1000px) {
                grid-template-columns: 1fr 1fr;
              }
              @media (max-width: 700px) {
                grid-template-columns: 1fr;
              }
            `}
          >
            <ServiceCard
              name="Structural Engineering"
              img={s5}
              text="We carry a wealth of knowledge in structural engineering design and work closely with the team to provide a robust solution, on time and on budget scheme. Our Engineers can carry out design in Indian Standards, British Standards and Eurocodes. "
              grayscale
            />
            <ServiceCard
              name="Civil Engineering"
              img={s6}
              text="Our Civil Engineering team provide innovative solution to provide an on-budget scheme and ensure that the contractors are supplied with the information prior to any structural works being carried out. With advanced engineering technology we ensure that the most efficient design has been provided. "
            />
            <ServiceCard
              name="Project and Design Management"
              img={s8}
              text="Our dedicated team of project and design management provide solutions to the most complex contracts. Our main focus is to ensure that the project is delivered to client’s aspiration in tandem with the planning, organisation, reporting and programming. "
              grayscale
            />
            <ServiceCard
              name="Reinforcement Detailing"
              img={s7}
              text="Our dedicated team of experienced technicians and engineers specialise in providing reinforcement detailing for all types of concrete structures. Our team have previously worked on various complex structures including detailing for various bridges. Our technicians and checking engineers specialise in Indian Standards, British Standards and Eurocodes. "
            />
            <ServiceCard name="Bridge Engineering" img={s3} />
            <ServiceCard name="Consulting" />
            <ServiceCard name="On Site Assistance" img={s4} grayscale />
            <ServiceCard name="BIM & CAD Modelling" img={s10} />
            <ServiceCard name="Digital Engineering" img={s9} />
          </div>
        </Section>
        <Section bg="#eeeeee" padding="50px" display="block">
          <div
            css={`
              text-align: center;
              font-size: 6rem;
              font-family: "Bebas Neue";
              color: #242424;
              box-sizing: border-box;
              width: fit-content;
              margin: 0 auto;
              margin-bottom: 50px;
              @media (max-width: 650px) {
                font-size: 20vw;
              }
              @media (max-width: 420px) {
                font-size: 17.5vw;
              }
            `}
          >
            OUR SECTORS
          </div>
          <div
            css={`
              width: 85%;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              row-gap: 2rem;
              column-gap: 10px;
              justify-items: center;
              box-sizing: border-box;
              margin: 0px auto;
              @media (max-width: 1600px) {
                grid-template-columns: 1fr 1fr 1fr;
              }
              @media (max-width: 1000px) {
                grid-template-columns: 1fr 1fr;
              }
              @media (max-width: 700px) {
                grid-template-columns: 1fr;
              }
            `}
          >
            <SectorCard
              sector="Industrial"
              src="https://img.icons8.com/cotton/120/000000/factory-1.png"
            />
            <SectorCard
              sector="Commercial"
              src="https://img.icons8.com/cotton/120/000000/downtown--v1.png"
            />
            <SectorCard
              sector="Residential"
              src="https://img.icons8.com/dusk/120/000000/room.png"
            />
            <SectorCard
              sector="Retail"
              src="https://img.icons8.com/cotton/120/000000/open-box--v1.png"
            />
            <SectorCard
              sector="Education"
              src="https://img.icons8.com/dusk/120/000000/student-center.png"
            />
            <SectorCard
              sector="Rail"
              src="https://img.icons8.com/office/120/000000/stop-train.png"
            />
            <SectorCard
              sector="Airport"
              src="https://img.icons8.com/color/120/000000/airport-building.png"
            />
            <SectorCard
              sector="Highway"
              src="https://img.icons8.com/color/120/000000/highway.png"
            />
          </div>
        </Section>
        <Section display="block" padding="40px">
          <div
            css={`
              display: flex;
              width: 80%;
              margin: 0 auto;
              box-sizing: border-box;
            `}
          >
            <div
              css={`
                width: 20%;
                padding: 20px;
                /* background-color: #00fff2; */
                display: flex;
                justify-content: center;
                box-sizing: border-box;
              `}
            >
              <img
                src="https://img.icons8.com/color/280/000000/add-contact-to-company.png"
                css={`
                  align-self: center;
                  opacity: 0.8;
                  position: relative;
                  left: -20px;
                `}
              />
            </div>
            <div
              css={`
                width: 80%;
                padding: 20px;
                /* background-color: yellow; */
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
              `}
            >
              <div
                css={`
                  font-size: 6rem;
                  font-family: "Bebas Neue";
                  color: #242424;
                  box-sizing: border-box;
                  @media (max-width: 650px) {
                    font-size: 20vw;
                  }
                  @media (max-width: 420px) {
                    font-size: 17.5vw;
                  }
                `}
              >
                contact us
              </div>
              <div
                css={`
                  text-align: justify;
                  font-family: "Raleway";
                  position: relative;
                  top: -10px;
                  font-size: 1.5rem;
                  margin-bottom: 10px;
                `}
              >
                Get in touch with our people. We have offices in over 50
                countries across six continents. Browse through our locations to
                find the right contacts for your inquiry. We will get back to
                you as soon as possible
              </div>
              <div
                css={`
                  text-align: justify;
                  font-family: "Bebas Neue";
                  position: relative;
                  top: -10px;
                  font-size: 2rem;
                  /* margin-bottom: 10px; */
                `}
              >
                GENERAL QUERIES
              </div>
              <div
                css={`
                  text-align: justify;
                  font-family: "Raleway";
                  position: relative;
                  font-size: 1.5rem;
                  margin-bottom: 10px;
                  top: -10px;
                `}
              >
                info@enginateconsultants.com
              </div>
            </div>
          </div>
        </Section>
      </Layout>
      <Footer />
    </>
  );
}
