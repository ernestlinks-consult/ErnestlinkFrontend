import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
  Grid,
  Checkbox,
  FormControlLabel,
  Button,
  Alert,
} from "@mui/material";
import { CheckCircle, Article } from "@mui/icons-material";

export default function ReviewAndSubmit({ onPrevious, data, allData }) {
  const [confirm, setConfirm] = useState(false);

  const passportData = allData[1] || {};
  const personalData = allData[2] || {};
  // const passportData = allData[1] || {};
  // const personalData = allData[2] || {};
  // const contactData = allData[10] || {};
  // const residentialData = allData[4] || {};
  // const educationData = allData[5] || {};
  // const parentalData = allData[6] || {};
  // const guarantorData = allData[7] || {};
  // const witnessData = allData[8] || {};
  // const documentsData = allData[9] || {};

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
      <CardHeader
        title={
          <Typography
            variant="h5"
            className="mb-1 font-semibold"
            sx={{ fontWeight: 600, color: "#0505AA" }}
          >
            Review & Submit Application
          </Typography>
        }
        subheader="Please review all the information below carefully before submitting your passport application."
      />

      <Alert severity="success" sx={{  p: 2 }}>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body2">
            All required sections have been completed. You can now submit your
            application.
          </Typography>
        </Box>
      </Alert>

      <CardContent>
        {/* Passport Application Info */}
      <Typography
        variant="subtitle1"
        color="#0505AA"
        fontWeight={600}
        gutterBottom
      >
        Passport Application Details
      </Typography>
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} sm={6}>
          <strong>Passport Type:</strong> {passportData.passportType.charAt(0).toUpperCase() + passportData.passportType.slice(1)}
        </Grid>
        <Grid item xs={12} sm={6}>
          <strong>Amount Paid:</strong> GH₵{passportData.amountPaid}
        </Grid>
        <Grid item xs={12} sm={6}>
          <strong>Payment Status:</strong> {passportData.paymentStatus}
        </Grid>
        <Grid item xs={12} sm={6}>
          <strong>Date Of Registration:</strong>{" "}
          {passportData.dateOfRegistration
            ? new Date(passportData.dateOfRegistration).toLocaleDateString()
            : ""}
        </Grid>
      </Grid>

      {/* Residential Info */}
      <Typography
        variant="subtitle1"
        color="#0505AA"
        fontWeight={600}
        gutterBottom
      >
        Personal Information
      </Typography>
      <Grid container spacing={4} mb={6}>
         <Grid item xs={12} sm={6}>
          <strong>Surname:</strong> {personalData.title}
        </Grid>
      </Grid>
     
      {/* <Grid container spacing={4} mb={6}>
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
      </Grid> */}

      <Divider sx={{ my: 3 }} />

      {/* Confirmation */}
      <Box mb={2}>
        <FormControlLabel
          control={
            <Checkbox 
              checked={confirm} 
              onChange={handleCheckboxChange} 
              sx={{
                '&.Mui-checked': {
                  color: '#0505AA',
                },
              }}/>
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
          <Button 
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
          variant="outlined" 
          type="button" 
          onClick={handlePrevious}>
            Previous
          </Button>
          <Button
          sx={{
            color: "#fff",
            borderColor: "#0505AA",
            bgcolor: "#0505AA",
            textTransform: "none",
            fontWeight: 400,
          }} 
          variant="contained" 
          type="submit" 
          disabled={!confirm}>
            Submit Application
          </Button>
        </Box>
      </form>
      </CardContent>
    </Box>
  );
}
