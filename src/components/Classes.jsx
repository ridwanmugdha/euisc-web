import React from "react";

export default function Classes() {
  let classDetails = [
    {
      name: "Primary",
      title: 'Kindergarten to Grade 6', 
      ageRange: "3 - 11",
      seats: "72 ",
      calssTime: "09:00 - 15:20",
      tutionFee: "€ 250 - € 350",
    },
    {
        name: "Middle School",
        title: 'Grade 7 to Grade 9 & IGCSE', 
        ageRange: "12 - 16",
        seats: "60 ",
        calssTime: "09:00 - 15:20",
        tutionFee: "€ 390 - € 500",
      },
      {
        name: "High School",
        title: 'Cambridge AS - A Level & Pre University',
        ageRange: "Above 16",
        seats: "30 ",
        calssTime: "09:00 - 15:20",
        tutionFee: "€ 550 - € 750",
      }
  ];
  return (
    <div>
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5">
              <span className="px-2">Popular Classes</span>
            </p>
            <h1 className="mb-4">Classes for Your Kids</h1>
          </div>
          <div className="row">
            {classDetails.map((el) => (
              <div className="col-lg-4 mb-5">
                <div className="card border-0 bg-light shadow-sm pb-2" style={{height:'100%'}}>
                  {/* <img
                    className="card-img-top mb-2"
                    src="img/class-1.jpg"
                    alt=""
                  /> */}
                  <div className="card-body text-center">
                    <h4 className="card-title mb-0">{el.name}</h4>
                    <p className="card-text">{el.title}</p>
                  </div>
                  <div className="card-footer bg-transparent py-4 px-5">
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>Age of Kids</strong>
                      </div>
                      <div className="col-6 py-1">{el.ageRange} Years</div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>Total Seats</strong>
                      </div>
                      <div className="col-6 py-1">{el.seats}Seats</div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>Class Time</strong>
                      </div>
                      <div className="col-6 py-1">{el.calssTime}</div>
                    </div>
                    <div className="row">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>Tution Fee</strong>
                      </div>
                      <div className="col-6 py-1">{el.tutionFee} / Month</div>
                    </div>
                  </div>
                  {/* <a href="/" className="btn btn-primary px-4 mx-auto mb-4">
                    Join Now
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
