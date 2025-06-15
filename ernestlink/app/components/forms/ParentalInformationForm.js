import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  Divider,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Grid,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

function ParentalInformationForm({ data, onNext, onPrevious }) {
  const [formData, setFormData] = useState({
    fatherFullName: data.fatherFullName || "",
    fatherLiving: data.fatherLiving || "",
    fatherTelephone: data.fatherTelephone || "",
    fatherEmail: data.fatherEmail || "",
    fatherHometown: data.fatherHometown || "",
    fatherResidentialAddress: data.fatherResidentialAddress || "",
    fatherPostalAddress: data.fatherPostalAddress || "",
    fatherNationality: data.fatherNationality || "",
    motherFullName: data.motherFullName || "",
    motherLiving: data.motherLiving || "",
    motherTelephone: data.motherTelephone || "",
    motherEmail: data.motherEmail || "",
    motherHometown: data.motherHometown || "",
    motherResidentialAddress: data.motherResidentialAddress || "",
    motherPostalAddress: data.motherPostalAddress || "",
    motherNationality: data.motherNationality || "",
    grandparentFullName: data.grandparentFullName || "",
    grandparentLiving: data.grandparentLiving || "",
    grandparentTelephone: data.grandparentTelephone || "",
    grandparentEmail: data.grandparentEmail || "",
    grandparentHometown: data.grandparentHometown || "",
    grandparentResidentialAddress: data.grandparentResidentialAddress || "",
    grandparentPostalAddress: data.grandparentPostalAddress || "",
    grandparentNationality: data.grandparentNationality || "",
  });

  const handleChange = (key) => (e) => {
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  const renderSection = (title, prefix) => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" color="green" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            label="Full Name"
            value={formData[`${prefix}FullName`]}
            onChange={(e) => {
              const onlyLetters = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // allow letters and spaces only
              setFormData((prev) => ({
                ...prev,
                [`${prefix}FullName`]: onlyLetters,
              }));
            }}
          />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Living</FormLabel>
            <RadioGroup
              row
              value={formData[`${prefix}Living`]}
              onChange={handleChange(`${prefix}Living`)}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Telephone"
            value={formData[`${prefix}Telephone`]}
            onChange={(e) => {
              const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 10); // ensure only digits, max 10
              setFormData((prev) => ({
                ...prev,
                [`${prefix}Telephone`]: onlyDigits,
              }));
            }}
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              minLength: 10,
              maxLength: 10,
            }}
            required
          />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={formData[`${prefix}Email`]}
            onChange={handleChange(`${prefix}Email`)}
          />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            label="Hometown"
            value={formData[`${prefix}Hometown`]}
            onChange={(e) => {
              const onlyLetters = e.target.value.replace(/[^a-zA-Z\s]/g, "");
              setFormData((prev) => ({
                ...prev,
                [`${prefix}Hometown`]: onlyLetters,
              }));
            }}
          />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            label="Nationality"
            value={formData[`${prefix}Nationality`]}
            onChange={(e) => {
              const onlyLetters = e.target.value.replace(/[^a-zA-Z\s]/g, "");
              setFormData((prev) => ({
                ...prev,
                [`${prefix}Nationality`]: onlyLetters,
              }));
            }}
          />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Residential Address"
            value={formData[`${prefix}ResidentialAddress`]}
            onChange={handleChange(`${prefix}ResidentialAddress`)}
          />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Postal Address"
            value={formData[`${prefix}PostalAddress`]}
            onChange={handleChange(`${prefix}PostalAddress`)}
          />
        </Grid>
      </Grid>
    </Box>
  );

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
      <CardHeader title="Citizenship & Parental Information" />
      <CardContent>
        <Typography variant="body1" gutterBottom>
          Please provide information about your parents and one grandparent
        </Typography>
        <form onSubmit={handleSubmit}>
          {renderSection("Mother's Information", "mother")}
          {renderSection("Father's Information", "father")}
          {renderSection("Grandparent's Information", "grandparent")}

          <Box display="flex" justifyContent="space-between" mt={4}>
            {onPrevious && (
              <Button
                variant="outlined"
                onClick={onPrevious}
                startIcon={<ArrowBack />}
              >
                Previous
              </Button>
            )}
            <Button
              type="submit"
              variant="contained"
              endIcon={<ArrowForward />}
            >
              Next
            </Button>
          </Box>
        </form>
      </CardContent>
    </Box>
  );
}

export default ParentalInformationForm;
