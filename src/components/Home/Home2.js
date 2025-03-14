import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import '../../style.css';

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import About from "../About/About";
// import Projects from "../Projects/Projects";
import Home3 from "./Home3";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle />
        
      <Container>
        <Row>
          {/* <Col md={8} > */}


          <Swiper
        direction={'vertical'}
        slidesPerView={'auto'}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
      >
             <SwiperSlide>
          <div className="home-about-description">
            {/* <h1 style={{ fontSize: "2.6em" }}>LET ME <span className="purple"> INTRODUCE </span> MYSELF</h1> */}
            <p className="home-about-body">
              Passionate about exploring new technologies and I have at least learnt
              something, while continuously expanding knowledge across various domains.
              {/* 🤷‍♂️ */}
              <br />
              <br />Experienced in delivering tailored solutions for diverse projects, from web development to design, ensuring
              <i>
                <b className="purple"> client satisfaction. </b>
              </i>
              
              Proficient in building robust web applications using&nbsp;
              <i>
                {" "}
                <b className="purple">
                  MongoDB, Express.js, React.js, and Node.js.
                </b>
              </i>
              <br />
              <br />
              Skilled in designing intuitive and visually appealing &nbsp;
              <i>
                <b className="purple">user interfaces </b>  with a focus on
              </i>

              <i>
                <b className="purple">    user experience </b>
              </i>


              and modern design principles.



            </p>
            
            
            </div>
            </SwiperSlide>
            </Swiper>

          {/* </Col> */}
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <About/>
        {/* <Projects/> */}

<Home3/>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rahuldevhub"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/rahulriyaz_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rahulrajendran1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/iamrahul.r1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

    </Container>
  );
}
export default Home2;
