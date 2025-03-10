import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";


const NotificationBadge = ({ count }) => {
  return (
    <div className="notification-container">
      <NotificationsIcon sx={{width:18,height:18}} className="notification-icon" />
      {count > 0 && <span className="badge">{count}</span>}
    </div>
  );
};

export default NotificationBadge;
