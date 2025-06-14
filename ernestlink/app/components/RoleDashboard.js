"use client";
import React, { useState } from "react";
import DashboardLayout from "./SideBar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BadgeIcon from "@mui/icons-material/Badge";
import AdminDashboard from "./AdminDashBoard";
import FacilatorDashboard from "./FacilatorDashboard";
import Facilitators from "./Facilitators";
import RegistrationFlow from "./AddNewPassportt";
import Passports from "./Passports";
import { Box } from "@mui/material";

export default function RoleDashboard({ role }) {
  const [customView, setCustomView] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  const handleMenuSelect = (key) => {
    setSelectedMenu(key);
    setCustomView(null);
  };

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
      component: (
        <Passports
          onRegisterNew={() =>
            setCustomView(
              <RegistrationFlow onBack={() => setCustomView(null)} />
            )
          }
        />
      ),
    },
  ];

  const facilitatorMenu = [
    {
      key: "dashboard",
      text: "Dashboard",
      title: "Facilitator Dashboard",
      icon: <DashboardIcon />,
      component: (
        <FacilatorDashboard
          onRegisterNew={() => 
            setCustomView(
              <RegistrationFlow onBack={() => setCustomView(null)}/>
            )
          } 
        />
      ),
    },
    {
      key: "passports",
      text: "Passports",
      title: "View Passports",
      icon: <BadgeIcon />,
      component: (
        <Passports
          onRegisterNew={() =>
            setCustomView(
              <RegistrationFlow onBack={() => setCustomView(null)} />
            )
          }
        />
      ),
    },
  ];

  const menuItems = role === "superadmin" ? superadminMenu : facilitatorMenu;
  const selectedMenuItem = menuItems.find((item) => item.key === selectedMenu);
  const pageTitle = customView
  ? "Register New Passport"
  : selectedMenuItem?.title ?? selectedMenuItem?.text;


  const currentComponent = customView ?? selectedMenuItem?.component ?? <div>Not Found</div>;

  return (
    <Box sx={{ bgcolor: "#F8FAFC", minHeight: "100vh" }}>
      <DashboardLayout
        menuItems={menuItems}
        selectedMenu={selectedMenu}
        setSelectedMenu={handleMenuSelect}
        pageTitle={pageTitle}
      >
        {currentComponent}
      </DashboardLayout>
    </Box>
  );
}
