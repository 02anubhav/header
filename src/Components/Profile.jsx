import React, { useState } from "react";
import { Menu, MenuItem, Avatar, IconButton } from "@mui/material";
import Data from "./Data.json"


const ProfileDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const input = "R";

  return (
    <div className="profile-container">
      <IconButton onClick={handleClick} className="avatar-button">
        <Avatar className="custom-avatar">{input}</Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="profile-menu"
        MenuListProps={{ className: "menu-list" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {Data.menuItems.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ProfileDropdown;
