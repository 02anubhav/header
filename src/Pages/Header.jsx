// import React from "react";
// import Section1 from "../Components/Section1";
// import Section2 from "../Components/Section2";
// // import Middle from "../Components/Middle";

// const Header = () => {
//   return (
//     <div className="container">
//       <Section2 />
//       {/* <Middle/> */}
//       <Section1 />
//     </div>
//   );
// };

// export default Header;




import React from "react";
import { Stack, Box } from "@mui/material";
import Profile from "../Components/Profile";
import Notification from "../Components/Notification";
import EditDashboard from "../Components/EditDashboard";
import DropDown from "../Components/DropDown";
import Search from "../Components/Search";
import Data from "../Components/Data.json";
import "./Header.scss"; 


const ThreeSections = () => {
  const count = [Data.count];
  return (
    <Stack className="section-stack">
      <Box className="section-box section-one">
        {[Data.name].map((name, index) => (
          <h6 key={index} className="gradient-text">
            Hi, {name}
          </h6>
        ))}
      </Box>
      <Box className="section-box section-two">
        <Search />
      </Box>
      <Box className="section-box section-three">
        <DropDown />
        <EditDashboard />
        <Notification count={count} />
        <Profile />
      </Box>
    </Stack>
  );
};

export default ThreeSections;

