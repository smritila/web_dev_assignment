import React from "react";

import { Grid } from "@mui/material";
import Sidebar from "./components/TheSidebar";
import TopBar from "./components/TheTopBar";
// import TheLayout from "../src/components/TheLayout";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} md={10}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TopBar />
          </Grid>
          <Grid item xs={12}>
            {/* Statistics Cards - Implementation similar to StatCard */}
          </Grid>
          <Grid item xs={12}>
            {/* Activity Chart */}
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Recent Orders */}
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Goals, Menus, Customer Feedback */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
