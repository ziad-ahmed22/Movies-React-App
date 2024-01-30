import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";

import { scrollToTop } from "../../utils/scrollToTop";
import HeaderC from "../../components/header/HeaderC";
import { contactInfo } from "../../data/contact";
import "./contact.css";

const Contatct = () => {
  useEffect(() => scrollToTop(), []);

  return (
    <div className="contact">
      <HeaderC title="Contact Us" />

      <Container>
        <div className="content py-5">
          <Row xs={1} md={2} lg={3} className="g-4">
            {contactInfo.map(({ id, name, icon }) => (
              <Col key={id}>
                <a
                  href="mailto:asd@asd.asd"
                  className="bg-blue flex-center flex-column rounded"
                >
                  {icon}
                  <h5 className="text-white mb-5">{name}</h5>
                </a>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Contatct;
