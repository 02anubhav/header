import React, { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import Data from "./Data.json";

const CustomDropdown = () => {
  const [value, setValue] = useState("");

  return (
    <Select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      displayEmpty
      className="custom-dropdown"
    >
      <MenuItem value="" disabled>
        Market
      </MenuItem>
      {Data.options.map((item, index) => (
        <MenuItem key={index} value={item.label}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CustomDropdown;
