import { useState } from "react";
import {
  Button,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  TextField
} from '@mui/material';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';


export default function ContactInformationForm({ data, onNext, onPrevious }) {
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
        // component="form"   
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
        title={<Typography variant="h5" className="mb-1 font-semibold" sx={{ fontWeight: 600, color: "#0505AA" }}>
        ID & Contact Information</Typography>}
        subheader="Please provide your identification and contact details"
      />
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid size={6}>
              <TextField
              fullWidth
              type='number'
              label="National ID Number (Ghana Card)"
              value={formData.nationalIdNumber}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, nationalIdNumber: e.target.value }))
              }
              required
              />
            </Grid>
          
            <Grid size={6}>
              <TextField
              fullWidth
              label="SSNIT Number (Optional)"
              value={formData.ssnitNumber}
              onChange={(e) =>
              setFormData((prev) => ({ ...prev, ssnitNumber: e.target.value }))
              }
              />
            </Grid>
          
            <Grid size={6}>
              <TextField
                fullWidth
                label="Telephone Number"
                type="tel"
                value={formData.telephoneNumber}
                onChange={(e) => {
                  const onlyNums = e.target.value.replace(/\D/g, ''); 
                  setFormData((prev) => ({ ...prev, telephoneNumber: onlyNums }));
                }}
                inputProps={{
                  inputMode: 'numeric',
                  pattern: '[0-9]*', // allows only numeric input
                }}
                required
              />
            </Grid>
          
            <Grid size={6}>
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                value={formData.emailAddress}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, emailAddress: e.target.value }))
                }
                required
              />
            </Grid> 
          </Grid>

          <Box mt={4} display="flex" justifyContent="space-between">
            {onPrevious && (
                      <Button variant="outlined"
                          sx={{color: "#0505AA",
                            borderColor: "#0505AA",
                            textTransform: "none",
                            fontWeight: 400,
                            "&:hover": {
                              bgcolor: "#0505AA",
                              color: "#fff",
                            },
                          }}
                      onClick={onPrevious} startIcon={<ArrowLeft />}>Previous</Button>
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
                  !formData.nationalIdNumber ||
                  !formData.telephoneNumber ||
                  !formData.emailAddress
                }
              >
              Next
            </Button>
          </Box>
        </form>
      </CardContent>
    </Box>
  );
}
