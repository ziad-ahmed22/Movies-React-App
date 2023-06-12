import React from "react";
import Navbar from "./../navbar/Navbar";
import HeaderC from "./../header/HeaderC";
import Footer from "./../footer/Footer";
import img from "./about2.jpg";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <HeaderC title="About Us" />

      <Container>
        <div className="welcome py-5">
          <h3 className="text-white mb-4">Welcome To Netflixo</h3>
          <Row xs={1} lg={2}>
            <Col>
              <p className="text-gray mb-5" style={{ lineHeight: "1.9" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <Row xs={1} sm={2}>
                <Col>
                  <div className="bg-blue text-gray rounded p-3 mb-3">
                    <h3 className="text-white fw-bold mb-4">10 K</h3>
                    <span className="fw-bold">Listed Movies</span>
                    <p className="mt-2">
                      Lorem Ipsum is simply dummy text of the printing.
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="bg-blue text-gray rounded p-3 mb-3">
                    <h3 className="text-white fw-bold mb-4">8 K</h3>
                    <span className="fw-bold">Lovely Users</span>
                    <p className="mt-2">
                      Completely registration! Lorem Ipsum is simply.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className="mb-4">
              <img
                src={img}
                alt=""
                style={{ objectFit: "cover" }}
                className="w-100 h-100 rounded ms-lg-2 mt-4 mt-lg-0"
              />
            </Col>
          </Row>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default About;
