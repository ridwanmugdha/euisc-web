import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="container-fluid position-relative shadow">
        <nav className="navbar navbar-expand-lg navbar-light py-2 py-lg-0 px-0 px-lg-5">
          <a href="/" className="navbar-brand font-weight-bold text-secondary">
            <img
              src={require("../assets/logo_text.png")}
              alt=""
              className="logo"
            />
            {/* <span className="text-primary"></span> */}
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            onClick={() => {
              setShow(!show);
            }}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={
              show
                ? "collapse navbar-collapse justify-content-between show"
                : "collapse navbar-collapse justify-content-between"
            }
            id="navbarCollapse"
          >
            <div className="navbar-nav font-weight-bold mx-auto py-0">
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>
              <div style={{ position: "relative" }} className="aboutNav">
                <Link
                  to="/about"
                  className="nav-item nav-link"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  About
                  <i
                    className="fa fa-angle-down"
                    style={{ marginLeft: "0.5rem" }}
                  />
                </Link>
                <div
                  className="hoverList"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  <Link to={"/academics"}>Academics</Link>
                  <Link to={"/management"}>Management</Link>
                </div>
              </div>
              <Link to="/classes" className="nav-item nav-link">
                Classes
              </Link>
              <Link to="/gallery" className="nav-item nav-link">
                Gallery
              </Link>
              <Link to="contact" className="nav-item nav-link">
                Contact
              </Link>
            </div>
            <a href="/panels" className="btn btn-primary px-4">
              Login
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
