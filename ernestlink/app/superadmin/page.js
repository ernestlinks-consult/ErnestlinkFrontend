"use client";
import React, { useState } from "react";
import DashboardLayout from "../components/SideBar";
import BadgeIcon from "@mui/icons-material/Badge";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";

// Components for each menu item
function AdminDashboard() {
  return <div>Welcome to Admin Dashboard</div>;
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
