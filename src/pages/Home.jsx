import React from "react";
import About from "../components/About";
import Admission from "../components/Admission";
import Classes from "../components/Classes";
import Facilities from "../components/Facilities";
import FrontBanner from "../components/FrontBanner";
import Teachers from "../components/Teachers";

export default function Home() {
  return (
    <div>
      <FrontBanner />
      <Facilities />
      <About />
      <Classes />
      <Admission />
      {/* <Teachers
        teachers={[
          {
            name: "Sanjoy Kumar Saha",
            designation: "Co-Founer & Principal",
            image: require("../assets/teachers/principal.jpg"),
          },
          {
            name: "M. Sojun Khan ",
            designation: "Co-Founder & Vice Principal",
            image: require("../assets/teachers/vice_principal.png"),
          },
          {
            name: "Kalay Shelvi",
            designation: "Principal - Primary Education",
            image: require("../assets/teachers/principal_primary.jpg"),
          },
        ]}
      /> */}
    </div>
  );
}
