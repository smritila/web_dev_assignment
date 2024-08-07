import React from "react";
import { CssBaseline, Grid, Box, Container, Typography } from "@mui/material";

import DashboardAppBar from "./components/DashboardAppBar";
import SideBar from "./components/SideBar";
import InfoCard from "./components/InfoCard";
import ActivityGraph from "./components/ActivityGraph";
import OrderTable from "./components/OrderTable";
import FeedbackComponent from "./components/FeedbackComponent";
import SmallInfoCard from "./components/SmallInfoCard";
import OtherWidgets from "./components/OtherWidgets";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100vw" disableGutters>
        <Box
          sx={{
            bgcolor: "white",
            height: "100vh",
            display: "grid",
            gridTemplateColumns: "60px auto",
            gridTemplateRows: "60px auto",
          }}
        >
          <Box
            sx={{
              gridRow: "1 / span 2",
              gridColumn: "1 / span 1",
              borderRight: "1px solid",
            }}
          >
            <SideBar />
          </Box>
          <Box sx={{ gridRow: "1 / span 1", gridColumn: "2 / span 1" }}>
            <DashboardAppBar />
          </Box>
          <Box
            sx={{
              gridRow: "2 / span 1",
              gridColumn: "2 / span 1",
              overflowY: "auto",
              p: 2,
            }}
          >
            <Typography variant="h5" gutterBottom>
              Dashboard
            </Typography>
            <Box
              sx={{
                bgcolor: "white",
                display: "grid",
                gridTemplateColumns: "65% auto",
                gridTemplateRows: "1fr 3fr 6fr",
                columnGap: "20px",
              }}
            >
              <Box
                sx={{
                  gridRow: "1 / span 1",
                  gridColumn: "1 / span 1",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ width: "24%" }}>
                  <InfoCard
                    title="Total Orders"
                    value="75"
                    icon={<ShoppingCartIcon />}
                    percentChange={3}
                    bgColor="#3f51b5"
                  />
                </Box>
                <Box sx={{ width: "24%" }}>
                  <InfoCard
                    title="Total Delivered"
                    value="70"
                    icon={<ShoppingCartIcon />}
                    percentChange={3}
                    bgColor="#f44336"
                  />
                </Box>
                <Box sx={{ width: "24%" }}>
                  <InfoCard
                    title="Total Cancelled"
                    value="05"
                    icon={<ShoppingCartIcon />}
                    percentChange={5}
                    bgColor="#4caf50"
                  />
                </Box>
                <Box sx={{ width: "24%" }}>
                  <InfoCard
                    title="Total Revenue"
                    value="$12K"
                    icon={<ShoppingCartIcon />}
                    percentChange={3}
                    bgColor="#4caf50"
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  gridRow: "1 / span 1",
                  gridColumn: "2 / span 1",
                  width: "100%",
                }}
              >
                <InfoCard
                  title="Net Profit"
                  value="$6759.25"
                  icon={<i className="someIcon" />}
                  bgColor="#2196f3"
                />
              </Box>
              <Box
                sx={{
                  gridRow: "2 / span 1",
                  gridColumn: "1 / span 1",
                }}
              >
                <ActivityGraph />
              </Box>
              <Box
                sx={{
                  gridRow: "2 / span 1",
                  gridColumn: "2 / span 1",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* <SmallInfoCard title="Goals" content="Content here" />
                <SmallInfoCard title="Popular Dishes" content="Content here" />
                <SmallInfoCard title="Menus" content="Content here" /> */}
                <OtherWidgets />
              </Box>
              <Box
                sx={{
                  gridRow: "3 / span 1",
                  gridColumn: "1 / span 1",
                }}
              >
                <OrderTable />
              </Box>
              <Box
                sx={{
                  gridRow: "3 / span 1",
                  gridColumn: "2 / span 1",
                }}
              >
                <FeedbackComponent />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
