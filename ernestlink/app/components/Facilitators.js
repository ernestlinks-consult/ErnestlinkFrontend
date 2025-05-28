import React from "react";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { Pencil, Trash2 } from "lucide-react";

const facilitators = [
  {
    name: "John Facilitator",
    email: "john@ernestlinks.com",
    dateAdded: "Jan 10, 2024",
  },
  {
    name: "Mary Facilitator",
    email: "mary@ernestlinks.com",
    dateAdded: "Feb 15, 2024",
  },
];

export default function Facilitators({ title }) {
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 2, md: 3, lg: 4 },
        bgcolor: "#F8FAFC",
        minHeight: "1000vh",
        overflowY: { xs: "auto", sm: "auto", md: "auto", lg: "visible" },
      }}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <Button className="bg-blue-900 hover:bg-blue-800 text-white">
            + Add Facilitator
          </Button>
        </div>
        <Card>
          <CardContent className="p-0">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100 text-gray-600 text-sm">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Date Added</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {facilitators.map((f, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-6 py-4 flex items-center gap-2">
                      <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-600">
                        👤
                      </div>
                      {f.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {f.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {f.dateAdded}
                    </td>
                    <td className="px-6 py-4 flex gap-4 text-blue-600">
                      <Pencil className="w-5 h-5 cursor-pointer" />
                      <Trash2 className="w-5 h-5 text-red-600 cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </Box>
  );
}
