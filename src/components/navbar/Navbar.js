import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { ImSearch } from "react-icons/im";
import { BsFillHeartFill } from "react-icons/bs";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.love);
  const [active, setActive] = useState(
    localStorage.getItem("activeLink") || "home"
  );

  useEffect(() => {
    localStorage.setItem("activeLink", active);
  }, [active]);

  return (
    <NavbarBs expand="lg" className="bg-dark-blue fw-bold py-1 navbar">
      <Container>
        <NavbarBs.Brand as={Link} to="/NetflixoReactApp">
          <Logo />
        </NavbarBs.Brand>

        <NavbarBs.Toggle
          className="bg-light"
          aria-controls="basic-navbar-nav"
        />

        <NavbarBs.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 nav align-items-center">
            <Nav.Link
              as={Link}
              to="/NetflixoReactApp"
              className={`text-light ${active === "home" ? "active" : ""}`}
              onClick={() => setActive("home")}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/NetflixoReactApp/movies"
              className={`text-light ${active === "movies" ? "active" : ""}`}
              onClick={() => setActive("movies")}
            >
              Movies
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/NetflixoReactApp/about"
              className={`text-light ${active === "about" ? "active" : ""}`}
              onClick={() => setActive("about")}
            >
              About Us
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/NetflixoReactApp/contact"
              className={`text-light ${active === "contact" ? "active" : ""}`}
              onClick={() => setActive("contact")}
            >
              Contact Us
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/NetflixoReactApp/watchlist"
              className={`love-icon text-light fs-4 ${
                active === "watchlist" ? "active" : ""
              }`}
              onClick={() => setActive("watchlist")}
            >
              <BsFillHeartFill />
              <div className="loves-num bg-red flex-center rounded-circle">
                {state.length}
              </div>
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/NetflixoReactApp/search"
              className={`terch-icon text-light fs-5 ${
                active === "search" ? "active" : ""
              }`}
              onClick={() => setActive("search")}
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
