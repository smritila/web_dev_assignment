import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";

function TopBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <Typography
          variant="h6"
          style={{ flexGrow: 1, margin: "auto" }}
        ></Typography>

        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
export default TopBar;
