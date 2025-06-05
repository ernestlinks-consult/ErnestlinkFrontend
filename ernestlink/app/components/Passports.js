"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Tooltip,
  Chip,
  alpha,
  Button,
  // TextField,
} from "@mui/material";
import { Search as SearchIcon, Add, Edit, Delete } from "@mui/icons-material";
import PassportForm from "./AddNewPassport";

const initialApplicants = [
  {
    id: 1,
    name: "Ken Smith",
    country: "Ghana",
    idNumber: "GH12345678",
    submittedBy: "Keklem Facilitator",
    date: "Apr 26, 2025",
    status: "Approved",
  },
  {
    id: 2,
    name: "Keren Johnson",
    country: "Nigeria",
    idNumber: "NG98765432",
    submittedBy: "Keklem Facilitator",
    date: "May 03, 2025",
    status: "Pending",
  },
  {
    id: 3,
    name: "Sarah Williams",
    country: "Uganda",
    idNumber: "KE45678901",
    submittedBy: "John Facilitator",
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
  // const [showFilters, setShowFilters] = useState(false);
  const [applicants, setApplicants] = useState(initialApplicants);
  const [open, setOpen] = useState(false);
  const [editApplicant, setEditApplicant] = useState(null);
  const [search, setSearch] = useState("");

  const handleDelete = (idToDelete) => {
    setApplicants((prev) => prev.filter((a) => a.id !== idToDelete));
  };

  const handleAdd = (newApplicant) => {
    setApplicants((prev) => [
      ...prev,
      {
        ...newApplicant,
        id: Date.now(),
        date: new Date().toLocaleDateString(),
      },
    ]);
    setOpen(false);
  };

  const handleEditClick = (applicant) => {
    setEditApplicant(applicant);
    setOpen(true);
  };

  const handleEdit = (updatedApplicant) => {
    setApplicants((prev) =>
      prev.map((a) =>
        a.id === updatedApplicant.id ? { ...a, ...updatedApplicant } : a
      )
    );
    setEditApplicant(null);
    setOpen(false);
  };

  const filteredApplicants = applicants.filter((a) =>
    [a.name, a.idNumber, a.country]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 4 }}>
      {/* Header Row: Title + Button */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#001A72" }}>
          Passport Applications
        </Typography>

        <Box display="flex" gap={2}>
          {/* <Button
      variant="outlined"
      onClick={() => setShowFilters((prev) => !prev)}
      sx={{
        textTransform: "none",
        borderColor: "#001A72",
        color: "#001A72",
        fontWeight: 400,
        "&:hover": {
          bgcolor: "#001A72",
          color: "#fff",
        },
      }}
    >
      Show Filters
    </Button> */}

          <Button
            variant="outlined"
            startIcon={<Add />}
            sx={{
              color: "#fff",
              borderColor: "#0505AA",
              bgcolor: "#0505AA",
              textTransform: "none",
              fontWeight: 400,
              "&:hover": {
                bgcolor: "#fff",
                color: "#0505AA",
              },
            }}
            onClick={() => setOpen(true)}
          >
            Register New Passport
          </Button>
        </Box>
      </Box>

      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "8px",
          px: 2,
          py: 1,
          mb: 3,
          width: "100%",
          maxWidth: "100%",
          bgcolor: "#fff",
        }}
      >
        <SearchIcon sx={{ color: "#999", mr: 1 }} />
        <input
          type="text"
          placeholder="Search by name, ID number, or Facilitator..."
          style={{
            border: "none",
            outline: "none",
            flex: 1,
            fontSize: "14px",
            color: "#333",
            backgroundColor: "transparent",
          }}
        />
        <Typography
          sx={{
            ml: 2,
            fontSize: "14px",
            fontWeight: 500,
            color: "#001A72",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Search
        </Typography>
      </Box>

      {/* Applicants Info Box */}
      <Box
        sx={{
          py: 1,
          width: "100%",
          overflow: "auto",
          height: "70vh",
          pb: 5,
        }}
      >
        <Box
          sx={{
            flex: 1,
            minHeight: { xs: "30px", sm: "10vh" },
            p: 3,
            border: "2px solid #007BFF30",
            borderRadius: 2,
            bgcolor: "#fff",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "#0505AA", mb: 2 }}
          >
            Applicants Info
          </Typography>

          {/* Table */}
          <Box
            sx={{
              overflowX: "auto",
              borderTop: "1px solid #ccc",
              borderBottom: "1px solid #ccc",
            }}
          >
            <Box
              sx={{
                display: "flex",
                minWidth: "1000px",
                bgcolor: "#D1D5DB",
                p: 1.5,
                fontWeight: "bold",
                color: "#333",
              }}
            >
              <Box width="20%">Applicant Name</Box>
              <Box width="15%">ID Number</Box>
              <Box width="20%">Submitted By</Box>
              <Box width="15%">Date</Box>
              <Box width="15%">Status</Box>
              <Box width="15%" textAlign="center">
                Action
              </Box>
            </Box>

            {filteredApplicants.length === 0 ? (
              <Box sx={{ minHeight: "100px", p: 2, color: "#777" }}>
                No matching applicants.
              </Box>
            ) : (
              filteredApplicants.map((a) => (
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
                  }}
                >
                  <Box width="20%">{a.name}</Box>
                  <Box width="15%">{a.idNumber}</Box>
                  <Box width="20%">{a.submittedBy}</Box>
                  <Box width="15%">{a.date}</Box>
                  <Box width="15%">
                    <Chip
                      label={
                        <Box display="flex" alignItems="center">
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              bgcolor: {
                                Approved: "#2e7d32",
                                Pending: "#ed6c02",
                                Rejected: "#d32f2f",
                              }[a.status],
                              mr: 1,
                            }}
                          />
                          {a.status}
                        </Box>
                      }
                      size="small"
                      sx={{
                        fontWeight: 600,
                        color: {
                          Approved: "#2e7d32",
                          Pending: "#ed6c02",
                          Rejected: "#d32f2f",
                        }[a.status],
                        backgroundColor: {
                          Approved: "#C8E6C9",
                          Pending: "#FFECB3",
                          Rejected: "#FFCDD2",
                        }[a.status],
                      }}
                    />
                  </Box>
                  <Box width="15%" textAlign="center">
                    <Tooltip title="Delete">
                      <IconButton
                        onClick={() => handleDelete(a.id)}
                        sx={{
                          color: "rgba(234, 6, 6, 0.7)",
                          "&:hover": { color: "rgba(234, 6, 6, 1)" },
                        }}
                        size="small"
                      >
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

      {/* Modal Form */}
      <PassportForm
        open={open}
        onClose={() => {
          setOpen(false);
          setEditApplicant(null);
        }}
        onAdd={handleAdd}
        onEdit={handleEdit}
        editData={editApplicant}
      />
    </Box>
  );
}
