"use client";
import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import Image from "next/image";

const drawerWidth = 318;

export default function DashboardLayout({ children }) {
  const userName = "Admin User";
  const userRole = "Admin";

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // small screen threshold

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        height: "100vh",
        width: drawerWidth,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
      <Box>
        <Toolbar sx={{ justifyContent: "center", px: 2 }}>
          <Image
            src="/images/elc_logo.png"
            alt="Logo"
            width={150}
            height={50}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Toolbar>
        <List>
          {[
            { text: "Dashboard", icon: <DashboardIcon /> },
            { text: "Users", icon: <PeopleIcon /> },
            { text: "Passports", icon: <BadgeIcon /> },
          ].map(({ text, icon }) => (
            // <ListItem button key={text}>
            //   <ListItemIcon sx={{ color: "#0505AA" }}>{icon}</ListItemIcon>
            //   <ListItemText primary={text} />
            // </ListItem>
            <ListItem
              button
              key={text}
              sx={{
                bgcolor: "#F8FAFC", // default light bg
                color: "#0505AA", // default dark text
                "&:hover": {
                  bgcolor: "#0505AA", // hover dark bg
                  color: "#F8FAFC", // hover light text
                  cursor: "pointer",
                  "& .MuiListItemIcon-root": {
                    color: "#F8FAFC", // icon changes color too
                  },
                },
              }}>
              <ListItemIcon sx={{ color: "#0505AA" }}>{icon}</ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ fontSize: "20px" }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider />
      <Box>
        <Button
          startIcon={<LogoutIcon />}
          fullWidth
          sx={{
            bgcolor: "#F8FAFC", // light background default
            color: "#0505AA", // dark text default
            "&:hover": {
              bgcolor: "#0505AA", // dark background on hover
              color: "#F8FAFC", // light text on hover
            },
          }}
          onClick={() => {
            alert("Logout clicked");
          }}>
          Logout
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar with hamburger icon only on mobile */}
      <AppBar
        position="fixed"
        sx={{
          width: isMobile ? "100%" : `calc(100% - ${drawerWidth}px)`,
          ml: isMobile ? 0 : `${drawerWidth}px`,
        }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
              aria-label="open drawer">
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar>{userName.charAt(0)}</Avatar>
            <Box>
              <Typography variant="subtitle1" sx={{ lineHeight: 1 }}>
                {userName}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ lineHeight: 1 }}>
                {userRole}
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar drawer */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sidebar folders">
        {/* Temporary drawer on mobile */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better performance on mobile
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#F8F8FF",
              color: "#0505AA",
              height: "100vh",
            },
          }}>
          {drawer}
        </Drawer>

        {/* Permanent drawer on desktop */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#F8F8FF",
              color: "#0505AA",
              height: "100vh",
            },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: "64px",
          width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
        }}>
        {children || <Typography>Welcome to the Admin Dashboard!</Typography>}
      </Box>
    </Box>
  );
}
