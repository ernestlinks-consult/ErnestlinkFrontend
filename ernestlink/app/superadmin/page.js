import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCircle, ClipboardList, BookUser } from "lucide-react";

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
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4">
        <div className="text-xl font-bold mb-6 text-blue-800">
          <img src="/logo.png" alt="logo" className="w-32" />
        </div>
        <nav className="space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start text-blue-700 font-semibold">
            <ClipboardList className="mr-2" /> Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <BookUser className="mr-2" /> Facilitators
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <UserCircle className="mr-2" /> Passports
          </Button>
        </nav>
        <Button
          variant="ghost"
          className="absolute bottom-4 w-52 text-red-600 font-bold">
          Logout
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-blue-900">
            Admin Dashboard
          </h1>
          <div className="flex items-center gap-2">
            <div className="bg-blue-700 text-white w-10 h-10 flex items-center justify-center rounded-full font-semibold">
              A
            </div>
            <div>
              <p className="font-bold">Admin User</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-gray-500">Total Registrations</p>
              <h2 className="text-3xl font-bold">1,658</h2>
              <p className="text-xs text-gray-400">
                Registrations across all facilitators
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-gray-500">Total Facilitators</p>
              <h2 className="text-3xl font-bold">12</h2>
              <p className="text-xs text-gray-400">
                All facilitators onboarded
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">
                Recent Passport Applications
              </h2>
              <Button variant="outline">View All</Button>
            </div>
            <div className="overflow-auto">
              <table className="w-full text-sm">
                <thead className="text-left text-gray-500">
                  <tr>
                    <th>ID</th>
                    <th>Applicant</th>
                    <th>Phone Number</th>
                    <th>Package</th>
                    <th>Payment</th>
                    <th>Submitted By</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app, index) => (
                    <tr key={index} className="border-t">
                      <td>{app.id}</td>
                      <td>{app.applicant}</td>
                      <td>{app.phone}</td>
                      <td>{app.package}</td>
                      <td>
                        <span
                          className={`px-2 py-1 rounded text-white text-xs font-medium ${
                            app.payment === "Paid"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}>
                          {app.payment}
                        </span>
                      </td>
                      <td>{app.submittedBy}</td>
                      <td>{app.date}</td>
                      <td>
                        <span className="bg-yellow-400 text-xs px-2 py-1 rounded-full font-medium">
                          {app.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
