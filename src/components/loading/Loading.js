import { Container } from "react-bootstrap";

const Loading = ({ grid }) => {
  let el = [];

  for (let i = 0; i < 8; i++) {
    el.push(
      <div key={i} style={{ height: "200px" }} className="placeholder"></div>
    );
  }

  return (
    <Container>
      {grid ? (
        <div className="grid-4">{el}</div>
      ) : (
        <h2 className="flex-center text-white py-5">Loading....</h2>
      )}
    </Container>
  );
};

export default Loading;
