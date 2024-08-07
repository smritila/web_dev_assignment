import React from "react";
import { Divider, Typography, Box, Avatar, Rating } from "@mui/material";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import AvatarImage from "../assets/images/avatar.jpg";

const feedbacks = [
  {
    name: "John Doe",
    feedback:
      "Great product! Intuitive interface and smooth performance. Battery life needs improvement. Responsive customer support. Overall, happy with it.",
    rating: 4,
  },
  {
    name: "Jane Smith",
    feedback:
      "Excellent build quality and features. Setup was easy. Pricey but worth it for the functionality. Highly recommend!",
    rating: 5,
  },
  {
    name: "Alice Johnson",
    feedback:
      "Solid features and nice design. Documentation could be clearer. Overall, a reliable product with room for improvement.",
    rating: 4,
  },
];

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "auto",
  padding: theme.spacing(2),
  ...theme.typography.body2,
}));

const FeedbackComponent = ({ name, feedback, rating }) => {
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Avatar alt="Profile picture" src={AvatarImage} />
        <Typography variant="h6" sx={{ ml: 1 }}>
          {name}
        </Typography>
      </Box>
      <Rating name="read-only" value={rating} readOnly />
      <Typography variant="body2" gutterBottom>
        {feedback}
      </Typography>
    </Box>
  );
};

const FeedbackComponents = () => {
  return (
    <DemoPaper variant="outlined">
      <Typography variant="h5" gutterBottom>
        Customer's Feedback
      </Typography>
      {feedbacks.map((feedback, idx) => (
        <React.Fragment key={idx}>
          <FeedbackComponent {...feedback} />
          <Divider sx={{ my: 1 }} />
        </React.Fragment>
      ))}
    </DemoPaper>
  );
};

export default FeedbackComponents;
