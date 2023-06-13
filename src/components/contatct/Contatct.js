import React from "react";
import HeaderC from "../header/HeaderC";
import { Col, Container, Row } from "react-bootstrap";
import { BsFillEnvelopeFill, BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import "./contact.css";

const Contatct = () => {
  return (
    <div className="contact">
      <HeaderC title="Contact Us" />
      <Container>
        <div className="content py-5">
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <a
                href="mailto:asd@asd.asd"
                className="bg-blue flex-center flex-column rounded"
              >
                <BsFillEnvelopeFill className="text-red bg-dark-blue mt-5 mb-4 rounded-circle" />
                <h5 className="text-white mb-5">Email Us</h5>
              </a>
            </Col>
            <Col>
              <a
                href="mailto:asd@asd.asd"
                className="bg-blue flex-center flex-column rounded"
              >
                <BsFillTelephoneInboundFill className="text-red bg-dark-blue mt-5 mb-4 rounded-circle" />
                <h5 className="text-white mb-5">Call Us</h5>
              </a>
            </Col>
            <Col>
              <a
                href="mailto:asd@asd.asd"
                className="bg-blue flex-center flex-column rounded"
              >
                <MdLocationOn className="text-red bg-dark-blue mt-5 mb-4 rounded-circle" />
                <h5 className="text-white mb-5">Location</h5>
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Contatct;
