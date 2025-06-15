"use client";
import React, { useState } from "react";
import DashboardLayout from "./SideBar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BadgeIcon from "@mui/icons-material/Badge";
import AdminDashboard from "./AdminDashBoard";
import FacilatorDashboard from "./FacilatorDashboard";
import Facilitators from "./Facilitators";
import RegistrationFlow from "./AddNewPassport";
import Passports from "./Passports";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

export default function RoleDashboard({ role }) {
  const [customView, setCustomView] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  const [showConfirmExit, setShowConfirmExit] = useState(false);
  const [pendingExitMenuKey, setPendingExitMenuKey] = useState(null);

  const handleMenuSelect = (key) => {
    if (customView) {
      setShowConfirmExit(true);
      setPendingExitMenuKey(key);
    } else {
      setSelectedMenu(key);
    }
  };

  const confirmExit = () => {
    setCustomView(null);
    if (pendingExitMenuKey) {
      setSelectedMenu(pendingExitMenuKey);
      setPendingExitMenuKey(null);
    }
    setShowConfirmExit(false);
  };

  const cancelExit = () => {
    setShowConfirmExit(false);
    setPendingExitMenuKey(null);
  };

  const handleBackFromCustomView = () => {
    setShowConfirmExit(true);
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
              <RegistrationFlow onBack={handleBackFromCustomView} />
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
              <RegistrationFlow onBack={handleBackFromCustomView} />
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
              <RegistrationFlow onBack={handleBackFromCustomView} />
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

  const currentComponent =
    customView ?? selectedMenuItem?.component ?? <div>Not Found</div>;

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

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmExit} onClose={cancelExit}>
        <DialogTitle>Confirm Exit</DialogTitle>
        <DialogContent>
          <Typography>Do you want to exit? Changes may be lost.</Typography>
        </DialogContent>
        <DialogActions>
          <Button 
          onClick={cancelExit} 
          sx={{
            color: "#0505AA",
            borderColor: "#0505AA",
            textTransform: "none",
            fontWeight: 400,
            "&:hover": {
              bgcolor: "#0505AA",
              color: "#fff",
            },
          }} variant="outlined">
            No
          </Button>
          <Button 
          onClick={confirmExit} 
          sx={{
            color: "#fff",
            borderColor: "#0505AA",
            bgcolor: "#0505AA",
            textTransform: "none",
            fontWeight: 400,
          }} variant="contained">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
