import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { ImSearch } from "react-icons/im";
import { BsFillHeartFill } from "react-icons/bs";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.love);
  const location = useLocation();

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
              className={`text-light ${
                location.pathname === "/NetflixoReactApp" ? "active" : ""
              }`}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/NetflixoReactApp/movies"
              className={`text-light ${
                location.pathname === "/NetflixoReactApp/movies" ? "active" : ""
              }`}
            >
              Movies
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/NetflixoReactApp/about"
              className={`text-light ${
                location.pathname === "/NetflixoReactApp/about" ? "active" : ""
              }`}
            >
              About Us
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/NetflixoReactApp/contact"
              className={`text-light ${
                location.pathname === "/NetflixoReactApp/contact"
                  ? "active"
                  : ""
              }`}
            >
              Contact Us
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/NetflixoReactApp/watchlist"
              className={`love-icon text-light fs-4 ${
                location.pathname === "/NetflixoReactApp/watchlist"
                  ? "active"
                  : ""
              }`}
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
                location.pathname === "/NetflixoReactApp/search" ? "active" : ""
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
