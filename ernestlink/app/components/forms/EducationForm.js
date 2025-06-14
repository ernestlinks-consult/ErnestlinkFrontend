import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

export default function EducationForm({ data, onNext, onPrevious }) {
  const [formData, setFormData] = useState({
    houseNumber: data.houseNumber || "",
    streetName: data.streetName || "",
    digitalAddress: data.digitalAddress || "",
    postalAddress: data.postalAddress || "",
    suburb: data.suburb || "",
    cityOfResidence: data.cityOfResidence || "",
    countryOfResidence: data.countryOfResidence || "",
    postalZipCode: data.postalZipCode || "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <Box
      sx={{
        flex: 1,
        minHeight: { xs: "30px", sm: "10vh" },
        p: 3,
        border: "2px solid #007BFF30",
        borderRadius: 2,
        bgcolor: "#F8F8FF",
      }}
    >
      <Typography variant="h6" fontWeight={600} gutterBottom>
        Residential Information_step_5
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        Please provide your current residential address details.
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="houseNumber"
              label="House Number"
              value={formData.houseNumber}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="streetName"
              label="Street Name"
              value={formData.streetName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="digitalAddress"
              label="Digital Address (GhanaPost GPS)"
              value={formData.digitalAddress}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="postalAddress"
              label="Postal Address"
              value={formData.postalAddress}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="suburb"
              label="Suburb"
              value={formData.suburb}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="cityOfResidence"
              label="City of Residence"
              value={formData.cityOfResidence}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="countryOfResidence"
              label="Country of Residence"
              value={formData.countryOfResidence}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="postalZipCode"
              label="Postal/Zip Code"
              value={formData.postalZipCode}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box display="flex" justifyContent="space-between">
          {onPrevious && (
            <Button
              variant="outlined"
              onClick={onPrevious}
              startIcon={<ArrowLeft />}
            >
              Previous
            </Button>
          )}
          <Button
            type="submit"
            variant="contained"
            endIcon={<ArrowRight />}
            disabled={
              !formData.houseNumber ||
              !formData.streetName ||
              !formData.digitalAddress ||
              !formData.postalAddress ||
              !formData.cityOfResidence ||
              !formData.countryOfResidence
            }
          >
            Next
          </Button>
        </Box>
      </form>
    </Box>
  );
}
