import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Us</div>
        <div className="BigCard">
          <Image
            src="https://gurupawar.github.io/portfolio/assets/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Yen Mai</strong>, a member of Group 12 at{" "}
            <strong>IS402.M11</strong>. The others member in my group is{" "}
            <strong>Thuong Ha</strong>, <strong>Linh Le</strong>, and{" "}
            <strong>Huan Cao</strong>. We have created this page as a demo for
            our presentation about Terraform and Infrastructure as Code. It's
            built with React, dockerized with Docker, and using Terraform to
            create infrastructure on AWS.
          </div>
          <div className="AboutBio tagline2">
            These are the detailed technologies we have chosen to develop this
            application:
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
