"use client";
// import React, { useState } from "react";
import React from "react";
import DashboardLayout from "./SideBar";
import DashboardLayoutt from "./SideBarTest";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BadgeIcon from "@mui/icons-material/Badge";
import AdminDashboard from "./AdminDashBoard";
import FacilatorDashboard from "./FacilatorDashboard";
import Facilitators from "./Facilitators";
import Passports from "./Passports";
import { Box } from "@mui/material";

export default function RoleDashboard({ role }) {
  const superadminMenu = [
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

  const facilitatorMenu = [
    {
      key: "dashboard",
      text: "Dashboard",
      title: "Facilitator Dashboard",
      icon: <DashboardIcon />,
      component: <FacilatorDashboard />,
    },
    {
      key: "passports",
      text: "Passports",
      title: "View Passports",
      icon: <BadgeIcon />,
      component: <Passports />,
    },
  ];

  const menuItems = role === "superadmin" ? superadminMenu : facilitatorMenu;

  const [selectedMenu, setSelectedMenu] = React.useState(menuItems[0].key);
  const selectedMenuItem = menuItems.find((item) => item.key === selectedMenu);
  const currentComponent = selectedMenuItem?.component ?? <div>Not Found</div>;
  const pageTitle = selectedMenuItem?.title ?? selectedMenuItem?.text;

  return (
    <Box sx={{ bgcolor: "#F8FAFC", minHeight: "100vh" }}>
      <DashboardLayout
        menuItems={menuItems}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
        pageTitle={pageTitle}>
        {currentComponent}
      </DashboardLayout>
    </Box>
  );
}
