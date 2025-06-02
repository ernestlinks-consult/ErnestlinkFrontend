import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const FacilitatorForm = ({ open, onClose, onAdd, onEdit, editData }) => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    if (editData) {
      setForm({
        name: editData.name || "",
        email: editData.email || "",
        password: editData.password || "",
      });
    } else {
      // Reset the form if it's not edit mode
      setForm({
        name: "",
        email: "",
        password: "",
      });
    }
  }, [editData]);

  React.useEffect(() => {
    if (!open) {
      setShowPassword(false);
    }
  }, [open]);

  const handleSubmit = () => {
    const facilitator = {
      id: editData ? editData.id : Date.now(),
      name: form.name,
      email: form.email,
      password: form.password,
      dateAdded: editData
        ? editData.dateAdded
        : new Date().toLocaleDateString(),
    };

    if (editData) {
      onEdit(facilitator);
    } else {
      onAdd(facilitator);
    }

    onClose();
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Facilitator</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Name"
          name="name"
          margin="normal"
          value={form.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          margin="normal"
          value={form.email}
          onChange={handleChange}
        />
        {/* <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          margin="normal"
          value={form.password}
          onChange={handleChange}
        /> */}
        <TextField
          fullWidth
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          margin="normal"
          value={form.password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  sx={{
                    color: "#d1d5dg",
                    "&:hover": {
                      color: "oklch(27.9% 0.041 260.031)",
                    },
                  }}
                  onClick={togglePasswordVisibility}
                  edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
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
          variant="outlined">
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
          }}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FacilitatorForm;
