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

import "./Header.scss"; // Import the SASS file
import { Edit } from "@mui/icons-material";

const ThreeSections = () => {
  return (
    <Stack className="section-stack">
      <Box className="section-box section-one">
        <h6 class="gradient-text">Hello, Anubhav</h6>
      </Box>
      <Box className="section-box section-two">
        <Search />
      </Box>
      <Box className="section-box section-three">
        <DropDown />
        <EditDashboard />
        <Notification count={1} />
        <Profile />
      </Box>
    </Stack>
  );
};

export default ThreeSections;

