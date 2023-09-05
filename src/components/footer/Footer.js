import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "./../navbar/Logo";
import "./footer.css";

const Footer = () => {
  const data = [
    { title: "Company", links: ["Home", "About Us", "Contact Us", "Movies"] },
    {
      title: "Top Categories",
      links: ["Action", "Romantic", "Drama", "Historical"],
    },
    {
      title: "My Account",
      links: ["Dashboard", "My Favorites", "Profile", "Change Password"],
    },
  ];
  return (
    <footer className="bg-blue pt-5">
      <Container>
        <Row xs={1} sm={2} md={3} lg={4}>
          {data.map((item, index) => (
            <Col key={index} className="mb-4">
              <h6 className="text-white mb-3">{item.title}</h6>
              <ul className="list-unstyled">
                {item.links.map((i, index) => (
                  <li key={index} className="mt-2 fs-14">
                    <a
                      href="/"
                      className="text-decoration-none text-gray"
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
          <Col className="logo-part">
            <a href="/" className="text-decoration-none">
              <Logo />
            </a>
            <ul className="list-unstyled">
              <li className="mt-2 fs-14">
                <a
                  href="/"
                  className="text-decoration-none text-gray"
                >
                  Lorem 196 Andrew Road
                </a>
              </li>
              <li className="mt-2 fs-14">
                <a
                  href="/"
                  className="text-decoration-none text-gray"
                >
                  New York, NY 10007
                </a>
              </li>
              <li className="mt-2 fs-14">
                <a
                  href="/"
                  className="text-decoration-none text-gray"
                >
                  Tell: +255 754 661 423
                </a>
              </li>
              <li className="mt-2 fs-14">
                <a
                  href="/"
                  className="text-decoration-none text-gray"
                >
                  Email: info@ziad.com
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center text-white bg-dark-blue p-3 mt-3">
        &copy; Ziad Ahmed Mahmoud &copy;
      </div>
    </footer>
  );
};

export default Footer;
