import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  // ListItemText,
  // Divider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

import LogoutIcon from "@mui/icons-material/Logout";
const SideBar = () => {
  return (
    <List
      style={{
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <div>
        <ListItem>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ShoppingBagOutlinedIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AccountBalanceWalletOutlinedIcon />
          </ListItemIcon>
        </ListItem>
      </div>
      <ListItem>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
      </ListItem>
    </List>
  );
};

export default SideBar;
