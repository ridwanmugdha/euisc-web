import React from "react";

export default function FrontBanner() {
  return (
    <div>
      <div className="container-fluid bg-primary px-0 px-md-5 mb-2w" style={{minHeight:'calc(100vh - 72px)' , display:'flex' , alignItems:'center'}}>
        <div className="align-items-center px-3 bannerContainer" style={{
            display:"flex",
            flexWrap:'wrap'
        }}>
          <div className="col-lg-6 text-center text-lg-left">
            <h4 className="text-white mb-4 mt-5 mt-lg-0">
              Inspiration, Motivation and Education
            </h4>
            <h1 className="display-4 font-weight-bold text-white">
              Better Education For A Better World.
            </h1>
            <p className="text-white mb-4">
              Any successful career starts with good education. Together with us
              you will have deeper knowledge of the subjects that will be
              especially useful for you when climbing the career ladder.
            </p>
            <a href="/" className="btn btn-secondary mt-1 py-3 px-5 banner-btn">
              Learn More
            </a>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <img className="img-fluid bannerImage" src={require('../assets/banner.jpg')} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
