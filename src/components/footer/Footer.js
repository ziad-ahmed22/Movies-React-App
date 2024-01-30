import { Col, Container, Row } from "react-bootstrap";

import { footerLinks, footerList } from "../../data/footer";
import { Logo } from "../logo/Logo";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-blue pt-5">
      <Container>
        <Row xs={1} sm={2} md={3} lg={4}>
          {footerLinks.map((item, index) => (
            <Col key={index} className="mb-4">
              <h6 className="text-white mb-3">{item.title}</h6>

              <ul className="list-unstyled">
                {item.links.map((i, index) => (
                  <li key={index} className="mt-2 fs-14">
                    <a href="/" className="text-decoration-none text-gray">
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
              {footerList.map((item) => (
                <li key={item} className="mt-2 fs-14">
                  <a href="/" className="text-decoration-none text-gray">
                    {item}
                  </a>
                </li>
              ))}
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
