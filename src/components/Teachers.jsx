import React, { useState } from "react";

export default function Teachers({teachers , title}) {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="text-center pb-2">
          <p className="section-title px-5">
            <span className="px-2">Our Faculties</span>
          </p>
          <h1 className="mb-4">{title ? title : " Meet Our Academics"}</h1>
        </div>
        <div className="row p-8">
          {teachers?.map((el) => (
            <div className="col-md-8 col-lg-4 text-center team mb-3" style={window.innerWidth > 768 ?  { padding:'0 8rem'} : { padding:'0 4rem'}}>
              <div
                className="position-relative overflow-hidden mb-4"
                style={{ borderRadius: "100%" }}
              >
                <img className="img-fluid w-100" src={el.image} alt="" />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a
                    className="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: 38, height: 38 }}
                    href="/"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: 38, height: 38 }}
                    href="/"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-outline-light text-center px-0"
                    style={{ width: 38, height: 38 }}
                    href="/"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
              <h4>{el.name}</h4>
              <i>{el.designation}</i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
