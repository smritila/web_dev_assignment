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
    <Card sx={{ bgcolor: bgColor }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color={"white"}>
          {title}
        </Typography>
        <Typography variant="h5" color={"white"}>
          {value}
        </Typography>
      </CardContent>
      {/* <CardHeader
        avatar={<Avatar sx={{ bgcolor: "transparent" }}>{icon}</Avatar>}
        title={title}
        subheader={value}
        titleTypographyProps={{
          variant: "subtitle2",
          color: "white",
        }}
        subheaderTypographyProps={{
          variant: "subtitle1",
          color: "white",
        }}
      /> */}
    </Card>
  );
};

export default InfoCard;
