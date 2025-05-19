import React from "react";
import { UserCircle, ClipboardList, BookUser } from "lucide-react";
import Header from "../components/AdminHeader";
import Sidebar from "../components/SideBar";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";

export default function AdminDashboard() {
  const applications = [
    {
      id: "PA0001",
      applicant: "John Doe Wilson",
      phone: "0243 987 456",
      package: "Normal",
      payment: "Pending",
      submittedBy: "Priscilla Aboakye",
      date: "June 2, 2025",
      status: "In Progress",
    },
    {
      id: "PA0002",
      applicant: "Michael Johnson",
      phone: "0243 987 456",
      package: "Normal",
      payment: "Paid",
      submittedBy: "Priscilla Aboakye",
      date: "June 2, 2025",
      status: "Completed",
    },
    {
      id: "PA0003",
      applicant: "John Doe Wilson",
      phone: "0243 987 456",
      package: "Normal",
      payment: "Pending",
      submittedBy: "Priscilla Aboakye",
      date: "June 2, 2025",
      status: "In Progress",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <Box component="main" className="flex-1 p-6">
          <Typography variant="h4" className="mb-6 font-bold text-gray-800">
            Admin Dashboard
          </Typography>

          <Card className="mb-6 shadow">
            <CardContent>
              <Typography
                variant="h6"
                className="mb-4 font-semibold text-gray-700">
                Databoard
              </Typography>
              <ul className="space-y-2">
                <li className="text-blue-600 hover:text-blue-800 cursor-pointer">
                  Facilitators
                </li>
                <li className="text-blue-600 hover:text-blue-800 cursor-pointer">
                  Passports
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="shadow">
              <CardContent>
                <Typography
                  variant="h6"
                  className="mb-2 font-semibold text-gray-700">
                  Total Registrations
                </Typography>
                <Typography
                  variant="h4"
                  className="text-blue-600 font-bold mb-2">
                  1,658
                </Typography>
                <Typography variant="body2" className="text-gray-500">
                  Registration across all institutions
                </Typography>
              </CardContent>
            </Card>

            <Card className="shadow">
              <CardContent>
                <Typography
                  variant="h6"
                  className="mb-2 font-semibold text-gray-700">
                  Total Facilitators
                </Typography>
                <Typography
                  variant="h4"
                  className="text-blue-600 font-bold mb-2">
                  12
                </Typography>
                <Typography variant="body2" className="text-gray-500">
                  All institutes or boarders
                </Typography>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow">
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <Typography
                  variant="h6"
                  className="font-semibold text-gray-700">
                  Recent Passport Applications
                </Typography>
                <Button variant="text" color="primary">
                  View All
                </Button>
              </div>

              <Table>
                <TableHead>
                  <TableRow className="bg-gray-100">
                    <TableCell>ID</TableCell>
                    <TableCell>APPLICANT</TableCell>
                    <TableCell>PHONE NUMBER</TableCell>
                    <TableCell>INDIVIZE</TableCell>
                    <TableCell>PROJECT</TableCell>
                    <TableCell>SEEM FTEID BY</TableCell>
                    <TableCell>DATE</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="text-center text-gray-500 py-4">
                      No recent applications
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="mt-6 shadow">
            <CardContent>
              <Typography variant="subtitle1" className="font-semibold">
                Admin User
              </Typography>
              <Typography variant="body1">Admin</Typography>
            </CardContent>
          </Card>
        </Box>
      </div>
    </div>
    // <div className="w-64 bg-gray-800 text-white h-screen fixed">
    //   <div className="p-4 border-b border-gray-700">
    //     <h2 className="text-xl font-bold">Admin Panel</h2>
    //   </div>
    //   <List>
    //     <ListItem button className="bg-blue-600">
    //       <ListItemIcon>
    //         <DashboardIcon className="text-white" />
    //       </ListItemIcon>
    //       <ListItemText primary="Dashboard" />
    //     </ListItem>
    //     <ListItem button>
    //       <ListItemIcon>
    //         <PeopleIcon className="text-gray-300" />
    //       </ListItemIcon>
    //       <ListItemText primary="Users" />
    //     </ListItem>
    //     <ListItem button>
    //       <ListItemIcon>
    //         <PassportIcon className="text-gray-300" />
    //       </ListItemIcon>
    //       <ListItemText primary="Passports" />
    //     </ListItem>
    //     <ListItem button>
    //       <ListItemIcon>
    //         <PersonIcon className="text-gray-300" />
    //       </ListItemIcon>
    //       <ListItemText primary="Facilitators" />
    //     </ListItem>
    //     <ListItem button>
    //       <ListItemIcon>
    //         <BusinessIcon className="text-gray-300" />
    //       </ListItemIcon>
    //       <ListItemText primary="Institutions" />
    //     </ListItem>
    //     <Divider className="bg-gray-700 my-2" />
    //     <ListItem button>
    //       <ListItemIcon>
    //         <SettingsIcon className="text-gray-300" />
    //       </ListItemIcon>
    //       <ListItemText primary="Settings" />
    //     </ListItem>
    //   </List>
    // </div>
  );
}
