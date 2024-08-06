import React from "react";
import { List, ListItem, ListItemText, Divider } from "@mui/material";

const feedbacks = [
  { name: "John Doe", feedback: "Great service!" },
  // Add more feedbacks here
];

const FeedbackComponent = () => {
  return (
    <List>
      {feedbacks.map((feedback, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={feedback.name}
              secondary={feedback.feedback}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};

export default FeedbackComponent;
