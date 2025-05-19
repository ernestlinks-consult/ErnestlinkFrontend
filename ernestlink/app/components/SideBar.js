// Sidebar.js
import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  CreditCard as PassportIcon,
  Person as PersonIcon,
  Business as BusinessIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen fixed">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>
      <List>
        <ListItem button className="bg-blue-600">
          <ListItemIcon>
            <DashboardIcon className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon className="text-gray-300" />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PassportIcon className="text-gray-300" />
          </ListItemIcon>
          <ListItemText primary="Passports" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon className="text-gray-300" />
          </ListItemIcon>
          <ListItemText primary="Facilitators" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BusinessIcon className="text-gray-300" />
          </ListItemIcon>
          <ListItemText primary="Institutions" />
        </ListItem>
        <Divider className="bg-gray-700 my-2" />
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon className="text-gray-300" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
