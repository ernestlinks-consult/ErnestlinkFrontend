// Header.js
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Avatar,
  InputBase,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

const Header = () => {
  return (
    <AppBar position="static" className="bg-white text-gray-800 shadow-sm">
      <Toolbar className="flex justify-between">
        <div className="flex items-center">
          <IconButton edge="start" className="mr-2 text-gray-600">
            <MenuIcon />
          </IconButton>
          <div className="relative rounded-md bg-gray-100 ml-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="text-gray-400" />
            </div>
            <InputBase
              placeholder="Search..."
              className="pl-10 pr-4 py-1"
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <IconButton className="text-gray-600">
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <div className="flex items-center">
            <Avatar
              className="w-8 h-8 mr-2"
              src="https://via.placeholder.com/40"
            />
            <span className="font-medium">Admin</span>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
