"use client";

import { React, useState } from "react";
import { Box, Typography, Button, IconButton, Tooltip } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import FacilitatorForm from "./AddFacilitatorForm";

const facilitators = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    dateAdded: "May 10, 2025",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    dateAdded: "May 12, 2025",
  },
];

export default function Facilitators() {
  const [open, setOpen] = useState(false);
  // const [facilitators, setFacilitators] = useState([]);
  const [facilitators, setFacilitators] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      dateAdded: "May 10, 2025",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      dateAdded: "May 12, 2025",
    },
  ]);

  const handleAddFacilitator = (newFacilitator) => {
    setFacilitators((prev) => [
      ...prev,
      {
        ...newFacilitator,
        id: Date.now(),
        dateAdded: new Date().toLocaleDateString(),
      },
    ]);
    setOpen(false);
  };

  const handleDeleteFacilitator = (idToDelete) => {
    setFacilitators((prev) => prev.filter((f) => f.id !== idToDelete));
  };

  const [editFacilitator, setEditFacilitator] = useState(null);

  const handleEditClick = (facilitator) => {
    setEditFacilitator(facilitator);
    setOpen(true);
  };

  const handleEditFacilitator = (updatedFacilitator) => {
    setFacilitators((prev) =>
      prev.map((f) =>
        f.id === updatedFacilitator.id ? { ...f, ...updatedFacilitator } : f
      )
    );
    setOpen(false);
    setEditFacilitator(null);
  };

  return (
    <Box
      sx={{
        py: 1,
        width: "100%",
        overflow: "auto",
        height: "80vh",
        pb: 5,
      }}
    >
      <Box
        sx={{
          flex: 1,
          minHeight: { xs: "30px", sm: "10vh" },
          mt: 5,
          p: 3,
          border: "2px solid #007BFF30",
          borderRadius: 2,
          bgcolor: "#fff",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, color: "#0505AA" }}>
            Facilitators
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "#0505AA",
              borderColor: "#0505AA",
              textTransform: "none",
              fontWeight: 400,
              "&:hover": {
                bgcolor: "#0505AA",
                color: "#fff",
              },
            }}
            onClick={() => setOpen(true)}
          >
            Add Facilitator
          </Button>

          <FacilitatorForm open={open} onClose={() => setOpen(false)} />
        </Box>

        <Box
          sx={{
            overflowX: "auto",
            borderTop: "1px solid #ccc",
            borderBottom: "1px solid #ccc",
          }}
        >
          {/* Table Header */}
          <Box
            sx={{
              display: "flex",
              minWidth: "800px",
              bgcolor: "#D1D5DB",
              p: 1.5,
              fontWeight: "bold",
              color: "#333",
            }}
          >
            <Box width="30%">Name</Box>
            <Box width="30%">Email</Box>
            <Box width="20%">Date Added</Box>
            <Box width="20%" textAlign="center">
              Action
            </Box>
          </Box>

          {/* Table Body */}
          {facilitators.length === 0 ? (
            <Box sx={{ minHeight: "100px", p: 2, color: "#777" }}>
              No facilitators added yet.
            </Box>
          ) : (
            facilitators.map((f, index) => (
              <Box
                key={f.id}
                sx={{
                  display: "flex",
                  minWidth: "800px",
                  alignItems: "center",
                  borderBottom: "1px solid #E0E0E0",
                  p: 1.5,
                  color: "#555",
                  "&:hover": { bgcolor: "#f9f9f9" },
                }}
              >
                <Box width="30%">{f.name}</Box>
                <Box width="30%">{f.email}</Box>
                <Box width="20%">{f.dateAdded}</Box>
                <Box width="20%" textAlign="center">
                  <Tooltip title="Edit">
                    <IconButton
                      onClick={() => handleEditClick(f)}
                      sx={{
                        color: "rgba(5, 5, 170, 0.7)",
                        "&:hover": {
                          color: "rgba(5, 5, 170, 1)",
                        },
                      }}
                      size="small"
                    >
                      <Edit fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton
                      onClick={() => handleDeleteFacilitator(f.id)}
                      sx={{
                        color: "rgba(234, 6, 6, 0.7)",
                        "&:hover": {
                          color: "rgba(234, 6, 6, 1)",
                        },
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
        {/* Modal Form */}
        <FacilitatorForm
          // onClose={() => setOpen(false)}
          open={open}
          onClose={() => {
            setOpen(false);
            setEditFacilitator(null); // Clear edit on close
          }}
          onAdd={handleAddFacilitator}
          onEdit={handleEditFacilitator}
          editData={editFacilitator}
        />
      </Box>
    </Box>
  );
}
