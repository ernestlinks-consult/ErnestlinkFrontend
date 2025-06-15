import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  TextField,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function GuarantorsForm({ data, onNext, onPrevious }) {
  const [formData, setFormData] = useState({
    guarantor1FullName: data.guarantor1FullName || "",
    guarantor1Occupation: data.guarantor1Occupation || "",
    guarantor1Telephone: data.guarantor1Telephone || "",
    guarantor1Email: data.guarantor1Email || "",
    guarantor1ResidentialAddress: data.guarantor1ResidentialAddress || "",
    guarantor1PostalAddress: data.guarantor1PostalAddress || "",
    guarantor2FullName: data.guarantor2FullName || "",
    guarantor2Occupation: data.guarantor2Occupation || "",
    guarantor2Telephone: data.guarantor2Telephone || "",
    guarantor2Email: data.guarantor2Email || "",
    guarantor2ResidentialAddress: data.guarantor2ResidentialAddress || "",
    guarantor2PostalAddress: data.guarantor2PostalAddress || "",
  });

  const handleChange = (key) => (e) => {
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
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
      <Typography variant="h5">Guarantors (Not Parents)</Typography>
      <Typography variant="body2">
        Please provide information for two guarantors who are not your parents.
        These should be people who can vouch for your identity and character.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" color="primary" gutterBottom>
          Guarantor 1
        </Typography>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid item size={{ xs: 12, md: 4 }}>
            <TextField
              label="Full Name"
              value={formData.guarantor1FullName}
              onChange={(e) => {
                const textOnly = e.target.value.replace(/[0-9]/g, ""); // remove numbers
                setFormData((prev) => ({
                  ...prev,
                  guarantor1FullName: textOnly,
                }));
              }}
              fullWidth
              required
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }}>
            <TextField
              label="Occupation"
              value={formData.guarantor1Occupation}
              onChange={(e) => {
                const textOnly = e.target.value.replace(/[0-9]/g, ""); // remove numbers
                setFormData((prev) => ({
                  ...prev,
                  guarantor1Occupation: textOnly,
                }));
              }}
              fullWidth
              required
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }}>
            <TextField
              label="Telephone"
              value={formData.guarantor1Telephone}
              onChange={(e) => {
                const onlyDigits = e.target.value
                  .replace(/\D/g, "")
                  .slice(0, 10); // allow only numbers, max 10
                setFormData((prev) => ({
                  ...prev,
                  guarantor1Telephone: onlyDigits,
                }));
              }}
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
                minLength: 10,
                maxLength: 10,
              }}
              fullWidth
              required
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item size={{ xs: 12, md: 4 }} mt={2}>
            <TextField
              label="Email"
              type="email"
              value={formData.guarantor1Email}
              onChange={(e) => {
                const textOnly = e.target.value.replace(/[0-9]/g, "");
                setFormData((prev) => ({
                  ...prev,
                  guarantor1Email: textOnly,
                }));
              }}
              fullWidth
              required
            />
          </Grid>

          <Grid item size={{ xs: 12, md: 4 }} mt={2}>
            <TextField
              label="Residential Address"
              value={formData.guarantor1ResidentialAddress}
              onChange={(e) => {
                const textOnly = e.target.value.replace(/[0-9]/g, "");
                setFormData((prev) => ({
                  ...prev,
                  guarantor1ResidentialAddress: textOnly,
                }));
              }}
              fullWidth
              required
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }} mt={2}>
            <TextField
              label="Postal Address"
              value={formData.guarantor1PostalAddress}
              onChange={(e) => {
                const textOnly = e.target.value.replace(/[0-9]/g, "");
                setFormData((prev) => ({
                  ...prev,
                  guarantor1PostalAddress: textOnly,
                }));
              }}
              fullWidth
              required
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />

        <Typography variant="h6" color="secondary" gutterBottom>
          Guarantor 2
        </Typography>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid item size={{ xs: 12, md: 4 }}>
            <TextField
              label="Full Name"
              value={formData.guarantor2FullName}
              onChange={(e) => {
                const textOnly = e.target.value.replace(/[0-9]/g, "");
                setFormData((prev) => ({
                  ...prev,
                  guarantor2FullName: textOnly,
                }));
              }}
              fullWidth
              required
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }}>
            <TextField
              label="Occupation"
              value={formData.guarantor2Occupation}
              onChange={(e) => {
                const textOnly = e.target.value.replace(/[0-9]/g, "");
                setFormData((prev) => ({
                  ...prev,
                  guarantor2Occupation: textOnly,
                }));
              }}
              fullWidth
              required
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }}>
            <TextField
              label="Telephone"
              value={formData.guarantor2Telephone}
              onChange={(e) => {
                const onlyDigits = e.target.value
                  .replace(/\D/g, "")
                  .slice(0, 10); // allow only numbers, max 10
                setFormData((prev) => ({
                  ...prev,
                  guarantor2Telephone: onlyDigits,
                }));
              }}
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
                minLength: 10,
                maxLength: 10,
              }}
              fullWidth
              required
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item size={{ xs: 12, md: 4 }} mt={2}>
            <TextField
              label="Email"
              type="email"
              value={formData.guarantor2Email}
              onChange={(e) => {
                const textOnly = e.target.value.replace(/[0-9]/g, "");
                setFormData((prev) => ({
                  ...prev,
                  guarantor2Email: textOnly,
                }));
              }}
              fullWidth
              required
            />
          </Grid>

          <Grid item size={{ xs: 12, md: 4 }} mt={2}>
            <TextField
              label="Residential Address"
              value={formData.guarantor2ResidentialAddress}
              onChange={(e) => {
                const textOnly = e.target.value.replace(/[0-9]/g, "");
                setFormData((prev) => ({
                  ...prev,
                  guarantor2ResidentialAddress: textOnly,
                }));
              }}
              fullWidth
              required
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }} mt={2}>
            <TextField
              label="Postal Address"
              value={formData.guarantor2PostalAddress}
              onChange={(e) => {
                const textOnly = e.target.value.replace(/[0-9]/g, "");
                setFormData((prev) => ({
                  ...prev,
                  guarantor2PostalAddress: textOnly,
                }));
              }}
              fullWidth
              required
            />
          </Grid>
        </Grid>

        <CardActions sx={{ justifyContent: "space-between", mt: 4 }}>
          {onPrevious && (
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={onPrevious}
            >
              Previous
            </Button>
          )}
          <Button
            type="submit"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
          >
            Next
          </Button>
        </CardActions>
      </form>
    </Box>
  );
}
