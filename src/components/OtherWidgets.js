import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { red, blue, green } from "@mui/material/colors";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "100%",
  padding: theme.spacing(2),
  ...theme.typography.body2,
}));

const generateStylesForIconContainer = (bgcolor, color) => ({
  p: 1,
  borderRadius: "50%",
  color,
  bgcolor,
  minWidth: 0,
});

const OtherWidgets = () => {
  return (
    <DemoPaper variant="outlined">
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemIcon
            sx={{ ...generateStylesForIconContainer(red[100], red[900]) }}
          >
            <ImageIcon />
          </ListItemIcon>
          <ListItemText primary="Goals" sx={{ ml: 1 }} />
          <IconButton edge="end">
            <ChevronRightIcon />
          </IconButton>
        </ListItem>
        <ListItem>
          <ListItemIcon
            sx={{ ...generateStylesForIconContainer(blue[100], blue[900]) }}
          >
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Popular Dishes" sx={{ ml: 1 }} />
          <IconButton edge="end">
            <ChevronRightIcon />
          </IconButton>
        </ListItem>
        <ListItem>
          <ListItemIcon
            sx={{ ...generateStylesForIconContainer(green[100], green[900]) }}
          >
            <BeachAccessIcon />
          </ListItemIcon>
          <ListItemText primary="Menus" sx={{ ml: 1 }} />
          <IconButton edge="end">
            <ChevronRightIcon />
          </IconButton>
        </ListItem>
        <ListItem>
          <ListItemIcon
            sx={{ ...generateStylesForIconContainer(red[100], red[900]) }}
          >
            <ImageIcon />
          </ListItemIcon>
          <ListItemText primary="Goals" sx={{ ml: 1 }} />
          <IconButton edge="end">
            <ChevronRightIcon />
          </IconButton>
        </ListItem>
        <ListItem>
          <ListItemIcon
            sx={{ ...generateStylesForIconContainer(blue[100], blue[900]) }}
          >
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Popular Dishes" sx={{ ml: 1 }} />
          <IconButton edge="end">
            <ChevronRightIcon />
          </IconButton>
        </ListItem>
      </List>
    </DemoPaper>
  );
};

export default OtherWidgets;
