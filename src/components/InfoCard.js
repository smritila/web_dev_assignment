import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const InfoCard = ({ title, value, icon, bgColor, percentChange }) => {
  return (
    <Card
      sx={{
        bgcolor: bgColor,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "140px",
        width: "140px",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ bgcolor: "rgba(0, 0, 0, 0.1)" }}>{icon}</Avatar>
          <Typography sx={{ fontSize: 14, ml: 1 }}>{title}</Typography>
        </Box>
        <Typography variant="h5">{value}</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ArrowUpwardIcon sx={{ fontSize: 12 }} />

          <Typography sx={{ fontSize: 12 }}>{percentChange}%</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
