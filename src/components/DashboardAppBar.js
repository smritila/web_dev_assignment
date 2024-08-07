import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Avatar,
  Badge,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { styled } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgba(255, 255, 255, 0.15)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
    },
  },
}));

const DashboardAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
        ></IconButton>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <div style={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <MailOutlineIcon />
        </IconButton>
        <IconButton color="inherit">
          <SettingsIcon />
        </IconButton>

        <IconButton size="large" color="inherit">
          <Badge badgeContent={2} color="error">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>

        <IconButton edge="end" color="inherit">
          <Avatar alt="Profile picture" src="" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardAppBar;
