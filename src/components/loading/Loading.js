import { Col, Container, Row } from "react-bootstrap";

const Loading = ({ grid }) => {
  return (
    <Container>
      {grid ? (
        <div className="grid-4">
          <div style={{ height: "200px" }} className="placeholder"></div>
          <div style={{ height: "200px" }} className="placeholder"></div>
          <div style={{ height: "200px" }} className="placeholder"></div>
          <div style={{ height: "200px" }} className="placeholder"></div>
          <div style={{ height: "200px" }} className="placeholder"></div>
          <div style={{ height: "200px" }} className="placeholder"></div>
          <div style={{ height: "200px" }} className="placeholder"></div>
          <div style={{ height: "200px" }} className="placeholder"></div>
          <div style={{ height: "200px" }} className="placeholder"></div>
        </div>
      ) : (
        <h1 className="flex-center text-white">Loading....</h1>
      )}
    </Container>
  );
};

export default Loading;
