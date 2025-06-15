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
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { inputFieldStyle } from './FormStyle';

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

  const isFormIncomplete = Object.values(formData).some(value => !value);

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
        title={<Typography variant="h5" className="mb-1 font-semibold" sx={{ fontWeight: 600, color: "#0505AA" }}>Guarantors (Not Parents)</Typography>}
        subheader="Please provide information for two guarantors who are not your parents.
        These should be people who can vouch for your identity and character."
      />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Typography variant="h6" color="#0505AA" gutterBottom>
            Guarantor 1
          </Typography>
          <Grid container spacing={2} sx={{ width: "100%" }}>
            <Grid item size={{ xs: 12, md: 4 }}>
              <TextField
                label="Full Name"
                value={formData.guarantor1FullName}
                onChange={handleChange("guarantor1FullName")}
                fullWidth
                sx={ inputFieldStyle }
                required
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <TextField
                label="Occupation"
                value={formData.guarantor1Occupation}
                onChange={handleChange("guarantor1Occupation")}
                fullWidth
                sx={ inputFieldStyle }
                required
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <TextField
                label="Telephone"
                value={formData.guarantor1Telephone}
                onChange={handleChange("guarantor1Telephone")}
                fullWidth
                sx={ inputFieldStyle }
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
                onChange={handleChange("guarantor1Email")}
                fullWidth
                sx={ inputFieldStyle }
                required
              />
            </Grid>

            <Grid item size={{ xs: 12, md: 4 }} mt={2}>
              <TextField
                label="Residential Address"
                value={formData.guarantor1ResidentialAddress}
                onChange={handleChange("guarantor1ResidentialAddress")}
                fullWidth
                sx={ inputFieldStyle }
                required
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }} mt={2}>
              <TextField
                label="Postal Address"
                value={formData.guarantor1PostalAddress}
                onChange={handleChange("guarantor1PostalAddress")}
                fullWidth
                sx={ inputFieldStyle }
                required
              />
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" sx={{color:"#0505AA"}} gutterBottom>
            Guarantor 2
          </Typography>
          <Grid container spacing={2} sx={{ width: "100%" }}>
            <Grid item size={{ xs: 12, md: 4 }}>
              <TextField
                label="Full Name"
                value={formData.guarantor2FullName}
                onChange={handleChange("guarantor2FullName")}
                fullWidth
                sx={ inputFieldStyle }
                required
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <TextField
                label="Occupation"
                value={formData.guarantor2Occupation}
                onChange={handleChange("guarantor2Occupation")}
                fullWidth
                sx={ inputFieldStyle }
                required
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <TextField
                label="Telephone"
                value={formData.guarantor2Telephone}
                onChange={handleChange("guarantor2Telephone")}
                fullWidth
                sx={ inputFieldStyle }
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
                onChange={handleChange("guarantor2Email")}
                fullWidth
                sx={ inputFieldStyle }
                required
              />
            </Grid>

            <Grid item size={{ xs: 12, md: 4 }} mt={2}>
              <TextField
                label="Residential Address"
                value={formData.guarantor2ResidentialAddress}
                onChange={handleChange("guarantor2ResidentialAddress")}
                fullWidth
                sx={ inputFieldStyle }
                required
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }} mt={2}>
              <TextField
                label="Postal Address"
                value={formData.guarantor2PostalAddress}
                onChange={handleChange("guarantor2PostalAddress")}
                fullWidth
                sx={ inputFieldStyle }
                required
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          <CardActions sx={{ justifyContent: "space-between", mt: 4 }}>
            {onPrevious && (
              <Button
                variant="outlined"
                startIcon={<ArrowLeft />}
                onClick={onPrevious}
                sx={{color: "#0505AA",
                    borderColor: "#0505AA",
                    textTransform: "none",
                    fontWeight: 400,
                    "&:hover": {
                    bgcolor: "#0505AA",
                    color: "#fff",
                    },
                }}
              >
                Previous
              </Button>
            )}
            <Button
              type="submit"
              variant="contained"
              endIcon={<ArrowRight />}
              disabled={isFormIncomplete}
              sx={{color: "#fff",
                  textTransform: "none",
                  fontWeight: 400,
                  bgcolor: "#0505AA",
                }}
            >
              Next
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Box>
  );
}
