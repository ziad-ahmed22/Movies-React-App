import { Col, Container, Row } from "react-bootstrap";
import { downloadData } from "../../../data/home";

const Download = () => {
  return (
    <div className="download py-5">
      <Container className="bg-blue">
        <Row xs={1} sm={1} md={1} lg={2}>
          <Col className="p-5">
            <h3 className="text-white mb-3" style={{ lineHeight: "1.8" }}>
              {downloadData.title}
            </h3>

            <p className="text-gray mb-5" style={{ lineHeight: "1.8" }}>
              {downloadData.describtion}
            </p>

            <div>
              {downloadData.list.map((item) => (
                <span
                  key={item}
                  className="bg-dark-blue text-white py-3 px-4 px-sm-5 me-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </Col>

          <Col>
            <img className="w-100 h-100" src={downloadData.image} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Download;
