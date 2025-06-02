import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const PassportForm = ({ open, onClose, onAdd, onEdit, editData }) => {
  const [form, setForm] = React.useState({
    fullName: "",
    passportNumber: "",
    nationality: "",
    dateOfBirth: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    if (editData) {
      setForm({
        fullName: editData.fullName || "",
        nationalID: editData.nationalID || "",
        nationality: editData.nationality || "",
        dateOfBirth: editData.dateOfBirth || "",
      });
    } else {
      setForm({
        fullName: "",
        passportNumber: "",
        nationality: "",
        dateOfBirth: "",
      });
    }
  }, [editData]);

  const handleSubmit = () => {
    const passportData = {
      id: editData ? editData.id : Date.now(),
      ...form,
      dateAdded: editData
        ? editData.dateAdded
        : new Date().toLocaleDateString(),
    };

    if (editData) {
      onEdit(passportData);
    } else {
      onAdd(passportData);
    }

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{editData ? "Edit Passport" : "Add Passport"}</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Full Name"
          name="fullName"
          margin="normal"
          value={form.fullName}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="National ID"
          name="nationalID"
          margin="normal"
          value={form.passportNumber}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Date of Birth"
          name="dateOfBirth"
          type="date"
          margin="normal"
          value={form.dateOfBirth}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          fullWidth
          label="Nationality"
          name="nationality"
          margin="normal"
          value={form.nationality}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          sx={{
            color: "oklch(27.9% 0.041 260.031)",
            borderColor: "#d1d5db",
            textTransform: "none",
            "&:hover": {
              color: "oklch(27.9% 0.041 260.031)",
              borderColor: "oklch(27.9% 0.041 260.031)",
              bgcolor: "#D1D5DB",
            },
          }}
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="outlined"
          sx={{
            color: "#0505AA",
            borderColor: "#0505AA",
            textTransform: "none",
            "&:hover": {
              bgcolor: "#0505AA",
              color: "#fff",
            },
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PassportForm;
