"use client";
import React, { useState } from "react";
import DashboardLayout from "../components/SideBar";
import BadgeIcon from "@mui/icons-material/Badge";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import GroupIcon from "@mui/icons-material/Group";

// Components for each menu item
function AdminDashboard() {
  return (
    <Box
      // sx={{
      //   p: { xs: 2, sm: 2, md: 3, lg: 4 },
      //   bgcolor: "#F8FAFC",
      //   minHeight: "1000vh",
      //   overflowY: { xs: "auto", sm: "auto", md: "auto", lg: "visible" },
      // }}
      maxWidth="xl"
      sx={{ py: 4, width: "100%", overflow: "auto", height: "80vh", pb: 5 }}>
      <Grid
        container
        spacing={2}
        sx={{
          mb: 4,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          },
        }}>
        {/* Total Registrations */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={1}
            sx={{
              p: 3,
              height: "100%",
              borderRadius: 3,
              border: "1px solid #CDCDF4",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center">
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: "#0505AA",
                  fontSize: { xs: "20px", sm: "24px", md: "28px" },
                }}>
                Total Registrations
              </Typography>
              <ContactPageOutlinedIcon
                sx={{ color: "#0505AA", fontSize: { xs: 24, md: 30 } }}
              />
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "#0505AA",
                fontSize: { xs: "32px", sm: "36px", md: "44px" },
              }}>
              1,658
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                color: "#0505AA",
                fontSize: { xs: "12px", sm: "13px", md: "14px" },
              }}>
              Registrations across all facilitators
            </Typography>
          </Paper>
        </Grid>

        {/* Total Facilitators */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={1}
            sx={{
              p: 3,
              height: "100%",
              borderRadius: 3,
              border: "1px solid #CDCDF4",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center">
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: "#0505AA",
                  fontSize: { xs: "20px", sm: "24px", md: "28px" },
                }}>
                Total Facilitators
              </Typography>
              <GroupIcon
                sx={{ color: "#0505AA", fontSize: { xs: 24, md: 30 } }}
              />
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "#0505AA",
                fontSize: { xs: "32px", sm: "36px", md: "44px" },
              }}>
              12
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                color: "#0505AA",
                fontSize: { xs: "12px", sm: "13px", md: "14px" },
              }}>
              All facilitators onboarded
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Recent Applications */}
      <Box
        sx={{
          flex: 1,
          minHeight: { xs: "300px", sm: "100vh" },
          mt: 5,
          p: 3,
          border: "2px solid #007BFF30",
          borderRadius: 2,
          bgcolor: "#fff",
        }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: "#0505AA" }}>
            Recent Passport Applications
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "#0505AA",
              borderColor: "#0505AA",
              textTransform: "none",
              fontWeight: 400,
              "&:hover": {
                bgcolor: "#0505AA",
                color: "#fff",
              },
            }}>
            View All
          </Button>
        </Box>
        <Box
          sx={{
            overflowX: "auto",
            borderTop: "1px solid #ccc",
            borderBottom: "1px solid #ccc",
          }}>
          <Box
            sx={{
              display: "flex",
              minWidth: "800px",
              bgcolor: "#D1D5DB",
              p: 1.5,
              fontWeight: "bold",
              color: "#333",
            }}>
            <Box width="10%">ID</Box>
            <Box width="20%">Applicant</Box>
            <Box width="20%">Phone Number</Box>
            <Box width="10%">Package</Box>
            <Box width="10%">Payment</Box>
            <Box width="10%">Submitted By</Box>
            <Box width="10%">Date</Box>
            <Box width="10%">Status</Box>
          </Box>
          <Box sx={{ minHeight: "150px", p: 2, color: "#777" }}>
            {/* Placeholder for actual rows */}
            No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.No recent passport applications found.No recent passport
            applications found.No recent passport applications found.No recent
            passport applications found.No recent passport applications found.No
            recent passport applications found.No recent passport applications
            found.
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Facilitators() {
  return <div>Manage Facilitators</div>;
}

function Passports() {
  return <div>View Passports</div>;
}

// Menu config
const adminMenu = [
  {
    key: "dashboard",
    text: "Dashboard",
    icon: <DashboardIcon />,
    component: <AdminDashboard />,
  },
  {
    key: "facilitators",
    text: "Facilitators",
    icon: <PeopleIcon />,
    component: <Facilitators />,
  },
  {
    key: "passports",
    text: "Passports",
    icon: <BadgeIcon />,
    component: <Passports />,
  },
];

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  const currentComponent = adminMenu.find((item) => item.key === selectedMenu)
    ?.component ?? <div>Not Found</div>;

  return (
    <DashboardLayout
      menuItems={adminMenu}
      selectedMenu={selectedMenu}
      setSelectedMenu={setSelectedMenu}>
      {currentComponent}
    </DashboardLayout>
  );
}
