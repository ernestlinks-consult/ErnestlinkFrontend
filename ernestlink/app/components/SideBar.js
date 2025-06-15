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
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import Image from "next/image";

const drawerWidth = 318;

export default function DashboardLayoutt({
  children,
  menuItems,
  pageTitle,
  selectedMenu,
  setSelectedMenu,
}) {
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Toolbar
          sx={{
            justifyContent: "center",
            px: 2,
            py: 3,
          }}
        >
          <Box
            sx={{
              bgcolor: "#F8FAFC",
              p: 1.5,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ml: -12,
            }}
          >
            <Image
              src="/images/elc_logo.png"
              alt="Logo"
              width={130}
              height={40}
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Toolbar>
        <List>
          {menuItems.map(({ key, text, icon }) => {
            const isSelected = selectedMenu === key;

            return (
              <ListItem
                // button
                key={key}
                selected={isSelected}
                onClick={() => {
                  setSelectedMenu(key);
                  if (isMobile) setMobileOpen(false); // close drawer on mobile
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  px: 5,
                  py: 2,
                  position: "relative",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                  bgcolor: isSelected ? "#0505AA" : "#F8FAFC",
                  color: isSelected ? "#F8FAFC" : "#0505AA",

                  "& .MuiListItemIcon-root": {
                    color: isSelected ? "#F8FAFC" : "#0505AA",
                  },

                  "&:hover": {
                    bgcolor: "#0505AA",
                    color: "#F8FAFC",
                    borderTop: "1px solid #F8F8FF",
                    borderBottom: "1px solid #F8F8FF",
                    "& .MuiListItemIcon-root": {
                      color: "#F8FAFC",
                    },
                  },

                  "&.Mui-selected": {
                    bgcolor: "#0505AA",
                    color: "#F8FAFC",
                    "& .MuiListItemIcon-root": {
                      color: "#F8FAFC",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: 0,
                      height: "100%",
                      width: "5px",
                      bgcolor: "#F8FAFC",
                      borderRadius: "0 4px 4px 0",
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 32 }}>{icon}</ListItemIcon>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Box sx={{ borderTop: "1px solid #0505AA" }}>
        <Button
          startIcon={<LogoutIcon />}
          fullWidth
          sx={{
            bgcolor: "#F8FAFC",
            color: "#0505AA",
            textTransform: "none",
            borderRadius: 0,
            fontSize: "24px",
            fontWeight: 600,
            py: 1,
            "&:hover": {
              bgcolor: "#0505AA",
              color: "#F8FAFC",
              "& .MuiButton-startIcon": {
                color: "#F8FAFC",
              },
            },
          }}
          onClick={() => {
            // Clear stored tokens and user data
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("user");

            // Redirect to login page
            window.location.href = "/adminlogin"; // or use router.push("/login") in Next.js
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#FFFFFF",
          color: "#03038D",
          width: isMobile ? "100%" : `calc(100% - ${drawerWidth}px)`,
          ml: isMobile ? 0 : `${drawerWidth}px`,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <Toolbar
          sx={{
            minHeight: {
              xs: 56,
              sm: 64,
              md: 100,
            },
            justifyContent: "space-between",
            px: 3,
          }}
        >
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 1 }}
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              color: "#03038D",
              fontSize: {
                xs: "16px",
                sm: "20px",
                md: "34px",
              },
            }}
          >
            {pageTitle}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mr: {
                xs: 0,
                md: 4,
              },
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#0505AA",
                width: {
                  xs: 40,
                  sm: 50,
                  md: 59,
                },
                height: {
                  xs: 40,
                  sm: 50,
                  md: 59,
                },
              }}
            >
              {userName.charAt(0)}
            </Avatar>
            <Box
              sx={{
                lineHeight: 0.5,
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 700,
                  fontSize: {
                    md: "14px",
                  },
                  color: "#0505AA",
                }}
              >
                {userName}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 400,
                  fontSize: {
                    md: "14px",
                  },
                  color: "#0505AA",
                  lineHeight: 1,
                }}
              >
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
        aria-label="sidebar folders"
      >
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
          }}
        >
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
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: "80px",
          width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
