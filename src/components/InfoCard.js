import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const InfoCard = ({ title, value, icon, bgColor, percentChange }) => {
  return (
    <Card
      sx={{
        bgcolor: bgColor,
        color: "white",
      }}
    >
      <CardContent sx={{ "padding-bottom": "10px !important" }}>
        <Box>
          {icon}
          <Typography sx={{ fontSize: 14 }}>{title}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">{value}</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ArrowUpwardIcon sx={{ fontSize: 12 }} />
            <Typography sx={{ fontSize: 12 }}>{percentChange}%</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
