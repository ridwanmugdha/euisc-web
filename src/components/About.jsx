import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img
                className="img-fluid rounded mb-5 mb-lg-0"
                src={require("../assets/about.jpg")}
                alt=""
              />
            </div>
            <div className="col-lg-7">
              <p className="section-title pr-5">
                <span className="pr-2">Learn About Us</span>
              </p>
              <h1 className="mb-4">Best School For Your Kids</h1>
              <p>
                We help you to build your child's future! The educational
                programs of our school will give your child all the necessary
                skills and knowledge to make everything they learned here work
                for them in the future.
              </p>
              <div className="row pt-2 pb-4">
                <div className="col-6 col-md-8">
                  <ul className="list-inline m-0">
                    <li className="py-2 border-top border-bottom">
                      <i className="fa fa-check text-primary mr-3" />
                      Academic Excellence
                    </li>
                    <li className="py-2 border-bottom">
                      <i className="fa fa-check text-primary mr-3" />
                      Community and Outdoor Education
                    </li>
                    <li className="py-2 border-bottom">
                      <i className="fa fa-check text-primary mr-3" />
                      International Understanding
                    </li>
                  </ul>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary mt-2 py-2 px-4">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
