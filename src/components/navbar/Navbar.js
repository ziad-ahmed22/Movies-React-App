import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { useSelector } from "react-redux";

import { Logo } from "../logo/Logo";
import "./navbar.css";

const navLinks = [
  { text: "Home", path: "/" },
  { text: "Movies", path: "/movies" },
  { text: "About Us", path: "/about" },
  { text: "Contact", path: "/contact" },
];

const Navbar = () => {
  const state = useSelector((state) => state.love);
  const location = useLocation();

  return (
    <NavbarBs expand="lg" className="bg-dark-blue fw-bold py-1 navbar">
      <Container>
        <NavbarBs.Brand as={Link} to="/">
          <Logo />
        </NavbarBs.Brand>

        <NavbarBs.Toggle
          className="bg-light"
          aria-controls="basic-navbar-nav"
        />

        <NavbarBs.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 nav align-items-center">
            {navLinks.map(({ text, path }) => (
              <Nav.Link
                key={text}
                as={Link}
                to={path}
                className={`text-light ${
                  location.pathname === path ? "active" : ""
                }`}
              >
                {text}
              </Nav.Link>
            ))}

            <Nav.Link
              as={Link}
              to="/watchlist"
              className={`love-icon text-light fs-4 ${
                location.pathname === "/watchlist" ? "active" : ""
              }`}
            >
              <BsFillHeartFill />
              <div className="loves-num bg-white text-red flex-center rounded-circle">
                {state.length}
              </div>
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/search"
              className={`terch-icon text-light fs-5 ${
                location.pathname === "/search" ? "active" : ""
              }`}
            >
              <ImSearch />
            </Nav.Link>
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
