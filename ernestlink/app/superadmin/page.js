"use client";
import React, { useState } from "react";
import DashboardLayout from "../components/SideBar";
import BadgeIcon from "@mui/icons-material/Badge";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import GroupIcon from "@mui/icons-material/Group";
import AdminDashboard from "../components/AdminDashBoard";
import Facilitators from "../components/Facilitators";
import Passports from "../components/Passports";

// function Facilitators() {
//   return <div>Manage Facilitators</div>;
// }

// function Passports() {
//   return <div>View Passports</div>;
// }

// Menu config
const adminMenu = [
  {
    key: "dashboard",
    text: "Dashboard",
    title: "Admin Dashboard",
    icon: <DashboardIcon />,
    component: <AdminDashboard />,
  },
  {
    key: "facilitators",
    text: "Facilitators",
    title: "Manage Facilitators",
    icon: <PeopleIcon />,
    component: <Facilitators />,
  },
  {
    key: "passports",
    text: "Passports",
    title: "Manage Passports",
    icon: <BadgeIcon />,
    component: <Passports />,
  },
];

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  // const currentComponent = adminMenu.find((item) => item.key === selectedMenu)
  //   ?.component ?? <div>Not Found</div>;
  const selectedMenuItem = adminMenu.find((item) => item.key === selectedMenu);
  const currentComponent = selectedMenuItem?.component ?? <div>Not Found</div>;
  const pageTitle = selectedMenuItem?.title ?? selectedMenuItem?.text;

  return (
    <Box sx={{ bgcolor: "#F8FAFC" }}>
      <DashboardLayout
        menuItems={adminMenu}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
        pageTitle={pageTitle}>
        {currentComponent}
      </DashboardLayout>
    </Box>
  );
}
