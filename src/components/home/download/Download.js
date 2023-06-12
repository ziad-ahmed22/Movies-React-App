import image from "./mobile.png";
import { Button, Col, Container, Row } from "react-bootstrap";

const Download = () => {
  return (
    <div className="download py-5">
      <Container className="bg-blue">
        <Row xs={1} sm={1} md={1} lg={2}>
          <Col className="p-5">
            <h3 className="text-white mb-3" style={{ lineHeight: "1.8" }}>
              Download Your Movies Watch Offline. Enjoy On Your Mobile
            </h3>
            <p className="text-gray mb-5" style={{ lineHeight: "1.8" }}>
              rem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries..
            </p>
            <div>
              <span className="bg-dark-blue text-white py-3 px-5 me-4">
                HD 4K
              </span>
              <span className="bg-dark-blue text-white py-3 px-5">2K</span>
            </div>
          </Col>
          <Col>
            <img className="w-100 h-100" src={image} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Download;
