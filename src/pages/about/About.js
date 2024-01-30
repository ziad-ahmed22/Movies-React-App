import { scrollToTop } from "../../utils/scrollToTop";
import { Col, Container, Row } from "react-bootstrap";
import HeaderC from "../../components/header/HeaderC";
import { aboutData } from "../../data/about";
import { useEffect } from "react";

const About = () => {
  useEffect(() => scrollToTop(), []);

  return (
    <div className="about">
      <HeaderC title="About Us" />

      <Container>
        <div className="welcome py-5">
          <h3 className="text-white mb-4">{aboutData.title}</h3>

          <Row xs={1} lg={2}>
            <Col>
              <p className="text-gray mb-5" style={{ lineHeight: "1.9" }}>
                {aboutData.describtion}
              </p>

              <Row xs={1} sm={2}>
                {aboutData.list.map(({ id, title, describtion, views }) => (
                  <Col key={id}>
                    <div className="bg-blue text-gray rounded p-3 mb-3">
                      <h3 className="text-white fw-bold mb-4">{views}</h3>
                      <span className="fw-bold">{title}</span>
                      <p className="mt-2">{describtion}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>

            <Col className="mb-4">
              <img
                src={aboutData.image}
                alt="about"
                className="w-100 h-100 rounded img-cover ms-lg-2 mt-4 mt-lg-0"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
