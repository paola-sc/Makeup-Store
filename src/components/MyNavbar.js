import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Collapse from "react-bootstrap/Collapse";
import Lotus from "../images/lotus.png";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";
import "../index";

export const MyNavbar = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const { cart } = useContext(CartContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand className="d-flex d-inline-flex">
            <img alt="Lotus icon" src={Lotus} width="32" height="32" />
            <h3 className="m-0 pt-1 pt-md-0 ms-2">The Beauty Store</h3>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="text-decoration-none text-white p-2 fs-5">
              Home
            </Link>
            <Link
              to="/about"
              className="text-decoration-none text-white p-2 fs-5"
            >
              About
            </Link>
            <NavDropdown
              title="Categories"
              id="collasible-nav-dropdown"
              className="text-white px-2 fs-5"
            >
              <>
                <div
                  onClick={() => setOpen1(!open1)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open1}
                  className="text-white fs-5 mb-1"
                >
                  Lip Products
                </div>
                <Collapse in={open1}>
                  <div id="example-collapse-text">
                    <div className="d-flex flex-column ms-3 mb-2">
                      <Link
                        to="/products/category/lip_liner"
                        className="text-decoration-none text-white"
                      >
                        Lip liner
                      </Link>
                      <Link
                        to="/products/category/lipstick"
                        className="text-decoration-none text-white"
                      >
                        Lipstick
                      </Link>
                    </div>
                  </div>
                </Collapse>
              </>
              <>
                <div
                  onClick={() => setOpen2(!open2)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open2}
                  className="text-white fs-5 mb-1"
                >
                  Eye Products
                </div>
                <Collapse in={open2}>
                  <div id="example-collapse-text">
                    <div className="d-flex flex-column ms-3 mb-2">
                      <Link
                        to="/products/category/eyeshadow"
                        className="text-decoration-none text-white"
                      >
                        Eyeshadow
                      </Link>
                      <Link
                        to="/products/category/eyeliner"
                        className="text-decoration-none text-white"
                      >
                        Eyeliner
                      </Link>
                      <Link
                        to="/products/category/mascara"
                        className="text-decoration-none text-white"
                      >
                        Mascara
                      </Link>
                      <Link
                        to="/products/category/eyebrow"
                        className="text-decoration-none text-white"
                      >
                        Eyebrow
                      </Link>
                    </div>
                  </div>
                </Collapse>
              </>
              <>
                <div
                  onClick={() => setOpen3(!open3)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open3}
                  className="text-white fs-5"
                >
                  Other Products
                </div>
                <Collapse in={open3}>
                  <div id="example-collapse-text">
                    <div className="d-flex flex-column ms-3 mb-2">
                      <Link
                        to="/products/category/blush"
                        className="text-decoration-none text-white"
                      >
                        Blush
                      </Link>
                      <Link
                        to="/products/category/bronzer"
                        className="text-decoration-none text-white"
                      >
                        Bronzer
                      </Link>
                      <Link
                        to="/products/category/foundation"
                        className="text-decoration-none text-white"
                      >
                        Foundation
                      </Link>
                      <Link
                        to="/products/category/nail_polish"
                        className="text-decoration-none text-white mb-2"
                      >
                        Nail Polish
                      </Link>
                    </div>
                  </div>
                </Collapse>
              </>
            </NavDropdown>
            <Link to="/cart" className="text-decoration-none text-white">
              <div>
                <i className="fa-solid fa-cart-shopping fs-5 text-white p-2 mt-2" />
                <span className="badge darkPink black px-2 py-1">
                  {cart.length}
                </span>
              </div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
