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
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { inputFieldStyle } from './FormStyle';

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

  const isFormIncomplete = Object.values(formData).some(value => !value);

  const renderSection = (title, prefix) => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" color="#0505AA" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            label="Full Name"
            value={formData[`${prefix}FullName`]}
            onChange={handleChange(`${prefix}FullName`)}
            sx={ inputFieldStyle }
          />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <FormControl component="fieldset">
            <FormLabel 
              component="legend" 
              sx={{
                color: '#8d6e63', 
                '&.Mui-focused': {
                  color: '#0505AA', 
                },
              }}>
                Living
              </FormLabel>
            <RadioGroup
              row
              value={formData[`${prefix}Living`]}
              onChange={handleChange(`${prefix}Living`)}
            >
              <FormControlLabel value="yes" control={
                <Radio 
                  sx={{ 
                    color: "#7070D8", 
                    '&.Mui-checked': { color: "#4040C0" } 
                  }} />} label="Yes" />
              <FormControlLabel value="no" control={
                <Radio 
                  sx={{ 
                    color: "#7070D8", 
                    '&.Mui-checked': { color: "#4040C0" } 
                  }} />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Telephone"
            value={formData[`${prefix}Telephone`]}
            onChange={handleChange(`${prefix}Telephone`)}
            sx={ inputFieldStyle }
          />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={formData[`${prefix}Email`]}
            onChange={handleChange(`${prefix}Email`)}
            sx={ inputFieldStyle }
          />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            label="Hometown"
            value={formData[`${prefix}Hometown`]}
            onChange={handleChange(`${prefix}Hometown`)}
            sx={ inputFieldStyle }
          />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            label="Nationality"
            value={formData[`${prefix}Nationality`]}
            onChange={handleChange(`${prefix}Nationality`)}
            sx={ inputFieldStyle }
          />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Residential Address"
            value={formData[`${prefix}ResidentialAddress`]}
            onChange={handleChange(`${prefix}ResidentialAddress`)}
            sx={ inputFieldStyle }
          />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Postal Address"
            value={formData[`${prefix}PostalAddress`]}
            onChange={handleChange(`${prefix}PostalAddress`)}
            sx={ inputFieldStyle }
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
      <CardHeader
        title={<Typography variant="h5" className="mb-1 font-semibold" sx={{ fontWeight: 600, color: "#0505AA" }}>Citizenship & Parental Information</Typography>}
        subheader="Please provide information about your parents and one grandparent"
      />
      <CardContent>
        <form onSubmit={handleSubmit}>
          {renderSection("Mother's Information", "mother")}
          {renderSection("Father's Information", "father")}
          {renderSection("Grandparent's Information", "grandparent")}

          <Divider sx={{ my: 4 }} />

          <Box display="flex" justifyContent="space-between" mt={4}>
            {onPrevious && (
              <Button
                variant="outlined"
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
                startIcon={<ArrowLeft />}
              >
                Previous
              </Button>
            )}
            <Button
              type="submit"
              variant="contained"
              sx={{color: "#fff",
                textTransform: "none",
                fontWeight: 400,
                bgcolor: "#0505AA",
              }}
              endIcon={<ArrowRight />}
              disabled={isFormIncomplete}
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
