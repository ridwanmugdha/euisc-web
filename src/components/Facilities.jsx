import React from "react";

export default function Facilities() {
  let facilities = [
    {
      title: "Trained Teachers",
      desc: "We have trained teachers and fully planned study roadmap for your kid",
    },
    {
      title: "Secure Educational Environment",
      desc: "We provide fully secure and helpful educational environment",
    },
    {
      title: "International Teaching Pattern",
      desc: "We follow fully international & advanced study pattern",
    },
    {
      title: "Digital Classroom",
      desc: "We use computers, tablets, internet and educational software to enhance student learning",
    },
    {
      title: "Computer & Science Lab",
      desc: "Our Labs are equipped with all modern computers and latest lab equipments",
    },
    {
      title: "Iqra Quran Academy",
      desc: "Iqra Quran Academy has been established with the aim of teaching the Holy Quran.",
    },
  ];
  return (
    <div>
      <div className="container-fluid pt-5">
        <div className="container pb-3">
          <p className="section-title pr-5">
            <span className="pr-2">Why us</span>
          </p>
          <h1 className="mb-4">Facilites For Your Kid</h1>
          <div className="row">
            {facilities.map((el) => (
              <div className="col-lg-4 col-md-6 pb-1 mb-3" key={el.title}>
                <div
                  className="d-flex bg-light shadow-sm rounded mb-4"
                  style={{ height:'100%' , alignItems:'center' , minHeight: 120}}
                >
                  <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />
                  <div className="pl-4 pr-4">
                    <h5>{el.title}</h5>
                    <p className="m-0">{el.desc}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: 30 }}
              >
                <i className="flaticon-022-drum h1 font-weight-normal text-primary mb-3" />
                <div className="pl-4">
                  <h4>Music and Dance</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: 30 }}
              >
                <i className="flaticon-030-crayons h1 font-weight-normal text-primary mb-3" />
                <div className="pl-4">
                  <h4>Arts and Crafts</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: 30 }}
              >
                <i className="flaticon-017-toy-car h1 font-weight-normal text-primary mb-3" />
                <div className="pl-4">
                  <h4>Safe Transportation</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: 30 }}
              >
                <i className="flaticon-025-sandwich h1 font-weight-normal text-primary mb-3" />
                <div className="pl-4">
                  <h4>Healthy environment</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: 30 }}
              >
                <i className="flaticon-047-backpack h1 font-weight-normal text-primary mb-3" />
                <div className="pl-4">
                  <h4>Educational Tour</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
