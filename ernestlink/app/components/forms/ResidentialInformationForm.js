import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

export default function ResidentialInformationForm({
  data,
  onNext,
  onPrevious,
}) {
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
      <CardHeader
        title={
          <Typography
            variant="h5"
            className="mb-1 font-semibold"
            sx={{ fontWeight: 600, color: "#0505AA" }}
          >
            Residential Information
          </Typography>
        }
        subheader="Please provide your current residential address details"
      />
      {/* <Divider /> */}
      <CardContent>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid size={6}>
              <TextField
                label="House Number"
                fullWidth
                required
                value={formData.houseNumber}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    houseNumber: e.target.value,
                  }))
                }
              />
            </Grid>

            <Grid size={6}>
              <TextField
                label="Street Name"
                fullWidth
                required
                value={formData.streetName}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    streetName: e.target.value,
                  }))
                }
              />
            </Grid>

            <Grid size={12}>
              <TextField
                label="Digital Address (GhanaPost GPS)"
                fullWidth
                required
                value={formData.digitalAddress}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    digitalAddress: e.target.value,
                  }))
                }
              />
            </Grid>

            <Grid size={12}>
              <TextField
                label="Postal Address"
                fullWidth
                required
                value={formData.postalAddress}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    postalAddress: e.target.value,
                  }))
                }
              />
            </Grid>

            <Grid size={6}>
              <TextField
                label="Suburb"
                fullWidth
                value={formData.suburb}
                onChange={(e) => {
                  const value = e.target.value || "";
                  const textOnly = e.target.value.replace(/[0-9]/g, "");
                  setFormData((prev) => ({
                    ...prev,
                    suburb: textOnly,
                  }));
                }}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                label="City of Residence"
                fullWidth
                required
                value={formData.cityOfResidence}
                onChange={(e) => {
                  const value = e.target.value || "";
                  const textOnly = e.target.value.replace(/[0-9]/g, "");
                  setFormData((prev) => ({
                    ...prev,
                    cityOfResidence: textOnly,
                  }));
                }}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                label="Country of Residence"
                fullWidth
                required
                value={formData.countryOfResidence}
                onChange={(e) => {
                  const value = e.target.value || "";
                  const textOnly = e.target.value.replace(/[0-9]/g, "");
                  setFormData((prev) => ({
                    ...prev,
                    countryOfResidence: textOnly,
                  }));
                }}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                label="Postal/Zip Code"
                fullWidth
                value={formData.postalZipCode}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    postalZipCode: e.target.value,
                  }))
                }
              />
            </Grid>
          </Grid>

          <Box mt={4} display="flex" justifyContent="space-between">
            {onPrevious && (
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
                startIcon={<ArrowLeft />}
                onClick={onPrevious}
              >
                Previous
              </Button>
            )}
            <Button
              type="submit"
              variant="contained"
              sx={{
                color: "#fff",
                borderColor: "#0505AA",
                bgcolor: "#0505AA",
                textTransform: "none",
                fontWeight: 400,
              }}
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
        </Box>
      </CardContent>
    </Box>
  );
}
