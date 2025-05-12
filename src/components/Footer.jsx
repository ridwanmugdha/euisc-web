import React from "react";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <a
              href="/"
              className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0"
            >
              <img
                style={{
                  height: "200px",
                  maxWidth: "100%",
                }}
                src={require("../assets/logo.png")}
                alt=""
              />
            </a>
            <p>
              We rests on the transformational belief that we all learn better
              when we learn together. We challenge and support each student in
              his or her academic, social, and emotional growth.
            </p>
            <div className="d-flex justify-content-start mt-4">
              <a
                className="btn btn-outline-white rounded-circle text-center mr-2 px-0"
                style={{ width: 38, height: 38 }}
                href="https://www.facebook.com/eusic.rome"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-outline-white rounded-circle text-center mr-2 px-0"
                style={{ width: 38, height: 38 }}
                href="/"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="btn btn-outline-white rounded-circle text-center mr-2 px-0"
                style={{ width: 38, height: 38 }}
                href="https://www.instagram.com/euisc.rome/"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h3 className="text-white mb-4">Get In Touch</h3>
            <div className="d-flex mb-3">
              <h4 className="fa fa-map-marker-alt text-white" />
              <div className="pl-3">
                <h5 className="text-white">Address</h5>
                <div style={{ marginLeft: "0.5rem" }}>
                  <p style={{ marginBottom: "0.275rem" }}>
                    VIALE PALMIRO TOGLIATTI 1587, ROME - 00155{" "}
                  </p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ marginRight: "0.25rem" }}>
                      Near Ponte Mammolo{" "}
                    </span>
                    <span> (Metro </span>
                    <img
                      style={{
                        width: "28px",
                        marginLeft: "0.325rem",
                        marginRight: "0.125rem",
                      }}
                      src={require("../assets/icons/location.png")}
                      alt=""
                    />{" "}
                    )
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <h4 className="fa fa-envelope text-white" />
              <div className="pl-3">
                <h5 className="text-white">Email</h5>
                <div style={{ marginLeft: "0.275rem" }}>
                  <p style={{ marginBottom: "0.175rem" }}>
                    info.euisc@gmail.com
                  </p>
                  <p>euisc.rome@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <h4 className="fa fa-phone-alt text-white" />
              <div className="pl-3">
                <h5 className="text-white">Phone</h5>
                <div style={{ marginLeft: "0.275rem" }}>
                  <p style={{ marginBottom: "0.175rem" }}>+39 388 658 5700</p>
                  <p style={{ marginBottom: "0.175rem" }}>+39 06 860 8825</p>
                  <p>+39 388 922 0636</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h3 className="text-white mb-4">Quick Links</h3>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white mb-2" href="/">
                <i className="fa fa-angle-right mr-2" />
                Home
              </a>
              <a className="text-white mb-2" href="/about">
                <i className="fa fa-angle-right mr-2" />
                About Us
              </a>
              <a className="text-white mb-2" href="/classes">
                <i className="fa fa-angle-right mr-2" />
                Our Classes
              </a>
              <a className="text-white mb-2" href="/academics">
                <i className="fa fa-angle-right mr-2" />
                Our Teachers
              </a>
              <a className="text-white" href="/contact">
                <i className="fa fa-angle-right mr-2" />
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h3 className="text-white mb-4">Email Us</h3>
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control border-0 py-4"
                  placeholder="Your Name"
                  required="required"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control border-0 py-4"
                  placeholder="Your Email"
                  required="required"
                />
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <button
                  className="btn btn-secondary btn-block border-0 py-3"
                  type="submit"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className="container-fluid pt-5"
          style={{ borderTop: "1px solid rgba(23, 162, 184, .2)" }}
        >
          <p className="m-0 text-center text-white">
            ©{" "}
            <a className="text-white font-weight-bold" href="/">
              EUISC
            </a>
            . All Rights Reserved. Designed by
            <a
              className="text-white font-weight-bold"
              href="https://asyncus.com"
            >
              {" ASYNCUS"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
