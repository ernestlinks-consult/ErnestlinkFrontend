// "use client";
// import React, { useState } from "react";
// import DashboardLayout from "../../components/SideBar";
// import BadgeIcon from "@mui/icons-material/Badge";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PeopleIcon from "@mui/icons-material/People";
// import { Box, Grid, Paper, Typography, Button } from "@mui/material";
// import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
// import GroupIcon from "@mui/icons-material/Group";
// import AdminDashboard from "../../components/AdminDashBoard";
// import Facilitators from "../../components/Facilitators";
// import Passports from "../../components/Passports";

// export default function Home({ role = "superadmin" }) {
//   const adminMenu = [
//     {
//       key: "dashboard",
//       text: "Dashboard",
//       title: "Admin Dashboard",
//       icon: <DashboardIcon />,
//       component: <AdminDashboard />,
//       roles: ["superadmin", "facilitator"],
//     },
//     {
//       key: "facilitators",
//       text: "Facilitators",
//       title: "Manage Facilitators",
//       icon: <PeopleIcon />,
//       component: <Facilitators />,
//       roles: ["superadmin"], // Only for superadmin
//     },
//     {
//       key: "passports",
//       text: "Passports",
//       title: "Manage Passports",
//       icon: <BadgeIcon />,
//       component: <Passports />,
//       roles: ["superadmin", "facilitator"], // Both roles can access
//     },
//   ];

//   // Filter menu items based on role
//   const menuItems = adminMenu.filter(
//     (item) => !item.roles || item.roles.includes(role)
//   );

//   const [selectedMenu, setSelectedMenu] = useState("dashboard");
//   const selectedMenuItem = menuItems.find((item) => item.key === selectedMenu);
//   const currentComponent = selectedMenuItem?.component ?? <div>Not Found</div>;
//   const pageTitle = selectedMenuItem?.title ?? selectedMenuItem?.text;

//   return (
//     <Box sx={{ bgcolor: "#F8FAFC" }}>
//       <DashboardLayout
//         menuItems={menuItems}
//         selectedMenu={selectedMenu}
//         setSelectedMenu={setSelectedMenu}
//         pageTitle={pageTitle}>
//         {currentComponent}
//       </DashboardLayout>
//     </Box>
//   );
// }
import RoleDashboard from "../../components/RoleDashboard";

export default function SuperadminDashboardPage() {
  return <RoleDashboard role="superadmin" />;
}
