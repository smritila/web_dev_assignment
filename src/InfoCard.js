import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
} from "@mui/material";

const InfoCard = ({ title, value, icon, bgColor }) => {
  return (
    <Card sx={{ minWidth: 275, bgcolor: bgColor }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "transparent" }}>{icon}</Avatar>}
        title={title}
        subheader={value}
        titleTypographyProps={{
          align: "center",
          variant: "h6",
          color: "white",
        }}
        subheaderTypographyProps={{
          align: "center",
          variant: "subtitle1",
          color: "white",
        }}
      />
    </Card>
  );
};

export default InfoCard;
