import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";

const SideBar = () => {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
      </ListItem>
    </List>
  );
};

export default SideBar;
