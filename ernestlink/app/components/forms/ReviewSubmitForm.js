import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  Checkbox,
  FormControlLabel,
  Button,
  Alert,
} from "@mui/material";
import { CheckCircle, Article } from "@mui/icons-material";

export default function ReviewAndSubmit({ onPrevious, data }) {
  const [confirm, setConfirm] = useState(false);

  const handleCheckboxChange = (event) => {
    setConfirm(event.target.checked);
  };

  const handlePrevious = () => {
    if (onPrevious) {
      onPrevious();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!confirm) return;
    console.log("Submitting application...", data); // You can replace with real submit logic
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
      <Box display="flex" alignItems="center" gap={1} mb={3}>
        <Article color="primary" />
        <Typography variant="h6" fontWeight={600}>
          Review & Submit Application
        </Typography>
      </Box>

      <Typography variant="body2" color="text.secondary" mb={3}>
        Please review all the information below carefully before submitting your
        passport application.
      </Typography>

      <Alert severity="success" sx={{ mb: 4, p: 2 }}>
        <Box display="flex" alignItems="center" gap={1}>
          <CheckCircle fontSize="small" />
          <Typography variant="body2">
            All required sections have been completed. You can now submit your
            application.
          </Typography>
        </Box>
      </Alert>

      {/* Passport Application Info */}
      <Typography
        variant="subtitle1"
        color="primary"
        fontWeight={600}
        gutterBottom
      >
        Passport Application Details
      </Typography>
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} sm={6}>
          <strong>Passport Type:</strong> {data.passportType}
        </Grid>
        <Grid item xs={12} sm={6}>
          <strong>Amount Paid:</strong> {data.amountPaid}
        </Grid>
        <Grid item xs={12} sm={6}>
          <strong>Payment Status:</strong> {data.paymentStatus}
        </Grid>
        <Grid item xs={12} sm={6}>
          <strong>Date Of Registration:</strong>{" "}
          {data.dateOfRegistration
            ? new Date(data.dateOfRegistration).toLocaleDateString()
            : ""}
        </Grid>
      </Grid>

      {/* Residential Info */}
      <Typography
        variant="subtitle1"
        color="primary"
        fontWeight={600}
        gutterBottom
      >
        Residential Information
      </Typography>
      <Grid container spacing={4} mb={6}>
        <Grid item xs={12} sm={6}>
          <strong>House Number:</strong> {data.houseNumber}
        </Grid>
        <Grid item xs={12} sm={6}>
          <strong>Street Name:</strong> {data.streetName}
        </Grid>
        <Grid item xs={12} sm={6}>
          <strong>Digital Address:</strong> {data.digitalAddress}
        </Grid>
        <Grid item xs={12} sm={6}>
          <strong>Postal Address:</strong> {data.postalAddress}
        </Grid>
        <Grid item xs={12} sm={6}>
          <strong>Suburb:</strong> {data.suburb}
        </Grid>
        <Grid item xs={12} sm={6}>
          <strong>City of Residence:</strong> {data.cityOfResidence}
        </Grid>
        <Grid item xs={12} sm={6}>
          <strong>Country of Residence:</strong> {data.countryOfResidence}
        </Grid>
        <Grid item xs={12} sm={6}>
          <strong>Postal/Zip Code:</strong> {data.postalZipCode}
        </Grid>
      </Grid>

      <Divider sx={{ my: 5 }} />

      {/* Confirmation */}
      <Box mb={4}>
        <FormControlLabel
          control={
            <Checkbox checked={confirm} onChange={handleCheckboxChange} />
          }
          label={
            <Typography variant="body2">
              I confirm that all information provided is true and correct.
            </Typography>
          }
        />
      </Box>

      {/* Submit */}
      <form onSubmit={handleSubmit}>
        <Box display="flex" justifyContent="space-between" mt={4}>
          <Button variant="outlined" type="button" onClick={handlePrevious}>
            Previous
          </Button>
          <Button variant="contained" type="submit" disabled={!confirm}>
            Submit Application
          </Button>
        </Box>
      </form>
    </Box>
  );
}
