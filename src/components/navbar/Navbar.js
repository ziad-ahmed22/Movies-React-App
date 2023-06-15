import React from "react";
import Logo from "./Logo";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { ImSearch } from "react-icons/im";
import { BsFillHeartFill } from "react-icons/bs";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.love);
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
              as={NavLink}
              to="/NetflixoReactApp"
              className="text-light"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/NetflixoReactApp/movies"
              className="text-light"
            >
              Movies
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/NetflixoReactApp/about"
              className="text-light"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/NetflixoReactApp/contact"
              className="text-light"
            >
              Contact Us
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/NetflixoReactApp/watchlist"
              className="love-icon text-light fs-4"
            >
              <BsFillHeartFill />
              <div className="loves-num bg-red flex-center rounded-circle">
                {state.length}
              </div>
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/NetflixoReactApp/search"
              className="serch-icon text-light fs-5"
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
