import React from "react";

export default function PanelPage() {
  let panels = [
    {
      title: "Admin",
      image: require('../assets/icons/admin.png'),
      link: "",
    },
    {
      title: "Accountant",
      image: require('../assets/icons/accountant.png'),
      link: "",
    },
    {
      title: "Directors",
      image: require('../assets/icons/director.png'),
      link: "",
    },
    {
      title: "Student",
      image: require('../assets/icons/student.png'),
      link: "",
    },
    {
      title: "Teacher",
      image: require('../assets/icons/accountant.png'),
      link: "",
    },
  ];
  return (
    <div>
      <div>
        <div className="container-fluid pt-5">
          <div className="container">
            <div className="text-center pb-2">
              <p className="section-title px-5">
                <span className="px-2">Portals</span>
              </p>
              <h1 className="mb-4">Select your portal to continue</h1>
            </div>
            <div className="row" style={{
                justifyContent:'center'
            }}>
              {panels.map((el) => (
                <div className="col-lg-2 mb-5">
                  <div className="card border-0 bg-light shadow-sm " style={{
                    display:'flex' , alignItems:'center' , justifyContent:'center' , padding:'1.5rem'
                }}>
                    <img src={el.image} style={{
                        width:'100px'
                        , marginBottom:'0.5rem'
                    }} alt="" />
                    <b>
                    {el.title}
                    </b>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
