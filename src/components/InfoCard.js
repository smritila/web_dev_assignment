import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
} from "@mui/material";

const InfoCard = ({ title, value, bgColor }) => {
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
    </Card>
  );
};

export default InfoCard;
