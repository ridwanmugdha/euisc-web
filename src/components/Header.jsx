import React from "react";
import { Link } from "react-router-dom";

export default function Header({ title , noMargin }) {
  return (
    <div>
      <div className= {noMargin ? "container-fluid bg-primary" : "container-fluid bg-primary mb-5"}>
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: 256 }}
        >
          <h3 className="display-3 font-weight-bold text-white">{title}</h3>
          <div className="d-inline-flex text-white">
            <p className="m-0">
              <Link className="text-white" to="/">
                Home
              </Link>
            </p>
            <p className="m-0 px-2">/</p>
            <p className="m-0">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
