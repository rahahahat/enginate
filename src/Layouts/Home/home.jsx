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
import SEO from "../../components/SEO/SEO";
// import Flippy, { FrontSide, BackSide } from "react-flippy";
import "../../index.css";
export default function Home() {
  return (
    <>
      <SEO title="HOME" />
      <Navbar selected="Home" />
      <Layout>
        <Section padding="0px" display="flex" id="home">
          <Carousal />
        </Section>
        <Section
          flexDir="column"
          display="flex"
          justifyCont="center"
          padding="4vw"
          bg="#eeeeee"
          className="about-us"
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
        <Section padding="5vw" flexDir="column" display="flex" id="services">
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
            Enginate provides best in class services for all your Structural and
            civil Engineering needs. We fully embrace the importance of time,
            quality and cost for any project.
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
              text="We carry a wealth of knowledge in structural engineering design. Our teams work closely with clients to provide a robust solution, on time and on budget. Our Engineers are fully proficient in carrying out designs to Indian Standards, British Standards and Eurocodes."
              grayscale
            />
            <ServiceCard
              name="Civil Engineering"
              img={s6}
              text="Our Civil Engineering team provides innovative solutions for delivering an on-budget scheme. We use advanced automation methods to ensure that the most efficient and cost-effective solutions are provided. "
            />
            <ServiceCard
              name="Project and Design Management"
              img={s8}
              text="Our dedicated team of project and design managers provide solutions to the most complex contracts. Our focus is to ensure that the project is delivered to our client’s aspirations in tandem with the planning, organisation, reporting and programming."
              grayscale
            />
            <ServiceCard
              name="Reinforcement Detailing"
              img={s7}
              text="Our dedicated team of experienced technicians and engineers specialise in providing reinforcement detailing for all types of concrete structures. We have worked on complex structures including detailing for various bridges, buildings and below ground structures. Our technicians are fully proficient in using latest softwares including REVIT, BIM360, AutoCAD, NavisWorks, & TEKLA.  "
            />
            <ServiceCard
              name="Bridge Engineering"
              img={s3}
              text="Our engineers carry an extensive experience in designing and delivering various bridges over the years. We work closely with clients and understand their aspirations to deliver a scheme that meets their requirements. We offer a full range of services including feasibility studies, preliminary and detailing design, design peer review, on site reviews and visits."
            />
            <ServiceCard
              name="Consulting"
              text="We offer expert and professional advice where our services are required. Our expert knowledge and experience makes Enginate a company that clients can trust and value our advice. We support our clients with Expert Witness reports, Structural inspections, Partywall surveys & Litigation Assistance. "
            />
            <ServiceCard
              name="On Site Assistance"
              img={s4}
              text="Our team provides on-site assistance for all projects and with our extensive experience within the construction sector. Our teams offers assistance and advice during feasibility, tender and construction period. "
              grayscale
            />
            <ServiceCard
              name="BIM & CAD Modelling"
              img={s10}
              text="We offer comprehensive BIM and Computer Aided Drafting (CAD) solutions ranging from 2D drawings to 3D and beyond to relevant engineering standards such as LOD 200. Our 2D modelling is carried out in Autodesk CAD whilst our 3D modelling in Revit along with fully integrated BIM level clash detections. "
            />
            <ServiceCard
              name="Digital Engineering"
              img={s9}
              text="With increased complexities in the design techniques, we employ various digital engineering tools to meet our clients expectations and unlock greater value of their assets. Our collaborative working, data sharing and management holds key to the success of our business. We have created various software tools to automate repetitive designs in order to save both timescales and human error. "
            />
          </div>
        </Section>
        <Section bg="#eeeeee" padding="4vw" display="block" id="sectors">
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
        <Section display="block" padding="10rem" id="contact-us">
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
                width: 18%;
                /* background-color: #00fff2; */
                display: flex;
                justify-content: center;
                box-sizing: border-box;
                margin-right: 4%;
              `}
            >
              <img
                src="https://img.icons8.com/color/270/000000/add-contact-to-company.png"
                css={`
                  align-self: center;
                  opacity: 0.8;
                  position: relative;
                  left: -5px;
                  top: -10px;
                `}
              />
            </div>
            <div
              css={`
                width: 78%;
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
                  font-size: 1.6rem;
                  margin-bottom: 10px;
                `}
              >
                Get in touch with our people. Drop us a line and we will get
                back to you as soon as possible.
              </div>
              <div
                css={`
                  text-align: justify;
                  font-family: "Bebas Neue";
                  position: relative;
                  /* top: -10px; */
                  font-size: 3rem;
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
                  font-size: 1.6rem;
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
