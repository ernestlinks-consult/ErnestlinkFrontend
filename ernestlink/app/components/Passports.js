"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Tooltip,
  Chip,
  Button,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const applicantsData = [
  {
    id: 1,
    name: "Jane Smith",
    country: "Ghana",
    idNumber: "GH12345678",
    submittedBy: "John Facilitator",
    date: "Apr 26, 2025",
    status: "Approved",
  },
  {
    id: 2,
    name: "Michael Johnson",
    country: "Nigeria",
    idNumber: "NG98765432",
    submittedBy: "John Facilitator",
    date: "May 03, 2025",
    status: "Pending",
  },
  {
    id: 3,
    name: "Sarah Williams",
    country: "Kenya",
    idNumber: "KE45678901",
    submittedBy: "Mary Facilitator",
    date: "May 08, 2025",
    status: "Rejected",
  },
];

const statusColors = {
  Approved: "success",
  Pending: "warning",
  Rejected: "error",
};

export default function PassportApplications() {
  const [applicants, setApplicants] = useState(applicantsData);

  const handleDelete = (idToDelete) => {
    setApplicants((prev) => prev.filter((a) => a.id !== idToDelete));
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#001A72" }}>
        Passport Applications
      </Typography>

      <Box
  sx={{
    py: 1,
    width: "100%",
    overflow: "auto",
    height: "80vh",
    pb: 5,
  }}>
  <Box
    sx={{
      flex: 1,
      minHeight: { xs: "30px", sm: "10vh" },
      mt: 5,
      p: 3,
      border: "2px solid #007BFF30",
      borderRadius: 2,
      bgcolor: "#fff",
    }}>
  
    <Box
      sx={{
        overflowX: "auto",
        borderTop: "1px solid #ccc",
        borderBottom: "1px solid #ccc",
      }}>
      {/* Table Header */}
      <Box
        sx={{
          display: "flex",
          minWidth: "1000px",
          bgcolor: "#D1D5DB",
          p: 1.5,
          fontWeight: "bold",
          color: "#333",
        }}>
        <Box width="20%">Applicant</Box>
        <Box width="15%">ID Number</Box>
        <Box width="20%">Submitted By</Box>
        <Box width="15%">Date</Box>
        <Box width="15%">Status</Box>
        <Box width="15%" textAlign="center">
          Action
        </Box>
      </Box>

      {/* Table Body */}
      {applicants.length === 0 ? (
        <Box sx={{ minHeight: "100px", p: 2, color: "#777" }}>
          No applicants yet.
        </Box>
      ) : (
        applicants.map((a) => (
          <Box
            key={a.id}
            sx={{
              display: "flex",
              minWidth: "1000px",
              alignItems: "center",
              borderBottom: "1px solid #E0E0E0",
              p: 1.5,
              color: "#555",
              "&:hover": { bgcolor: "#f9f9f9" },
            }}>
            <Box width="20%">{a.name}</Box>
            <Box width="15%">{a.idNumber}</Box>
            <Box width="20%">{a.submittedBy}</Box>
            <Box width="15%">{a.date}</Box>
            <Box width="15%">
              <Chip
                label={a.status}
                color={statusColors[a.status]}
                size="small"
                sx={{ fontWeight: 500 }}
              />
            </Box>
            <Box width="15%" textAlign="center">
              <Tooltip title="Edit">
                <IconButton
                  sx={{
                    color: "rgba(5, 5, 170, 0.7)",
                    "&:hover": { color: "rgba(5, 5, 170, 1)" },
                  }}
                  size="small">
                  <Edit fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton
                  onClick={() => handleDelete(a.id)}
                  sx={{
                    color: "rgba(234, 6, 6, 0.7)",
                    "&:hover": { color: "rgba(234, 6, 6, 1)" },
                  }}
                  size="small">
                  <Delete fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        ))
      )}
    </Box>
  </Box>
</Box>

    </Box>
  );
}
