import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const SmallInfoCard = ({ title, content }) => {
  return (
    <Card
      sx={{
        minWidth: 100,
        minHeight: 100,
        m: 1,
        bgcolor: "primary.dark",
        color: "white",
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default SmallInfoCard;
