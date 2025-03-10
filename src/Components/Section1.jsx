import * as React from "react";
import Section3 from "./Profile";
import Notification from "./Notification";
import EditDashboard from "./EditDashboard";
const Section1 = () => {
  const count=()=>{
     let val= 1;
     return val;
  }
  return (
    <div className="section1">
      <div className="section1__container2">
        <div className="section3">
          <EditDashboard>Edit Dashboard</EditDashboard>
          <Notification count={1} />
        </div>
      </div>

      <div className="section1__container1">
        <Section3 />
      </div>
    </div>
  );
};

export default Section1;
