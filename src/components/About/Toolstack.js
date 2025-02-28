import React from "react";
import { Col, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";

import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiFigma,
  SiCanva     
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Marquee
          gradient={false}
          speed={70}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="right"
        >
      <Col xs={2} md={5} className="tech-icons tech-iconwidth"><SiAdobephotoshop  /></Col>
      <Col xs={4} md={2} className="tech-icons tech-iconwidth"><SiAdobeillustrator  /></Col>
      <Col xs={4} md={2} className="tech-icons tech-iconwidth"><SiAdobeindesign  /></Col>
      <Col xs={4} md={2} className="tech-icons tech-iconwidth"><SiFigma   /></Col>
      <Col xs={4} md={2} className="tech-icons tech-iconwidth"><SiCanva   /></Col>
      <Col xs={4} md={2} className="tech-icons tech-iconwidth"><SiVisualstudiocode /></Col>
      <Col xs={4} md={2} className="tech-icons tech-iconwidth"><SiPostman /></Col>     
      <Col xs={4} md={2} className="tech-icons tech-iconwidth"><SiVercel /></Col>
      </Marquee>
    </Row>
  );
}

export default Toolstack;
