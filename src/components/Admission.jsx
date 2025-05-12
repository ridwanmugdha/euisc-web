import React from "react";

export default function Admission() {
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <p className="section-title pr-5">
                <span className="pr-2">Admission</span>
              </p>
              <h1 className="mb-4">Adminssion form</h1>
              <b
              >
                Admission for the academic year 2022-23 from KG to Cambridge AS-A Level is open now. Please
                fill the admission form or contact directly with us to start your journey with our school.
              </b>
              <ul className="list-inline mt-2">
                <li className="py-2">
                  <i className="fa fa-check text-success mr-3" />
                  Academic Year 2022-23
                </li>
                <li className="py-2">
                  <i className="fa fa-check text-success mr-3" />
                  From KG to Cambridge AS-A Level
                </li>
              </ul>
              <a href="/" className="btn btn-primary mt-4 py-2 px-4">
                Download
              </a>
            </div>
            <div className="col-lg-5">
              <img src={require('../assets/admission.jpg')} style={{
                width:"100%"
                , borderRadius: 12
              }} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
