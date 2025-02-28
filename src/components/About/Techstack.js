import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import Marquee from "react-fast-marquee";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiMongodb 
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >

      <Col xs={1} md={3} lg={4} className="tech-icons tech-iconwidth"><FaReact /></Col>
      <Col xs={1} md={3} lg={4}className="tech-icons tech-iconwidth"><DiJavascript1 /></Col>
      <Col xs={1} md={3} lg={4} className="tech-icons tech-iconwidth"><SiMongodb  /></Col>
      <Col xs={1} md={3} lg={4} className="tech-icons tech-iconwidth"><DiNodejs /></Col>
      <Col xs={1} md={3} lg={4} className="tech-icons tech-iconwidth"><DiReact /></Col>
      <Col xs={1} md={3} lg={4} className="tech-icons tech-iconwidth"><SiSolidity /></Col>
      <Col xs={1} md={3} lg={4} className="tech-icons tech-iconwidth"><DiMongodb /></Col>
      <Col xs={1} md={3} lg={4} className="tech-icons tech-iconwidth"><SiNextdotjs /></Col>
      <Col xs={1} md={3} lg={4} className="tech-icons tech-iconwidth"><DiGit /></Col>
      <Col xs={1} md={3} lg={4} className="tech-icons tech-iconwidth"><SiFirebase /></Col>
      <Col xs={1} md={3} lg={4} className="tech-icons tech-iconwidth"><SiRedis /></Col>
      <Col xs={1} md={3} lg={4} className="tech-icons tech-iconwidth"><SiPostgresql /></Col>
      <Col xs={1} md={3} lg={4} className="tech-icons tech-iconwidth"><DiPython /></Col>
      <Col xs={1} md={3} lg={4} className="tech-icons tech-iconwidth"><DiJava /></Col>
        </Marquee>
    </Row>
  );
}

export default Techstack;
