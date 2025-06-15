import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  Grid,
  Box,
  Button,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';

export default function EducationForm({ data, onNext, onPrevious }) {
  const [formData, setFormData] = useState({
    institutionName: data.institutionName || '',
    periodFrom: data.periodFrom || null,
    periodTo: data.periodTo || null,
    schoolPostalAddress: data.schoolPostalAddress || '',
  });

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
              }}>
      <CardHeader
         title={<Typography variant="h5" className="mb-1 font-semibold" sx={{ fontWeight: 600, color: "#0505AA" }}>Education</Typography>}
        subheader="Please provide details about your most recent educational institution"
      />
      <CardContent>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid size={12}>
                <TextField
                  fullWidth
                  required
                  label="Institution Name"
                  value={formData.institutionName}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, institutionName: e.target.value }))
                  }
                />
              </Grid>

              <Grid size={6}>
                <DatePicker
                  label="Period From"
                  value={formData.periodFrom}
                  onChange={(date) =>
                    setFormData((prev) => ({ ...prev, periodFrom: date }))
                  }
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      required: true,
                    },
                  }}
                  maxDate={new Date()}
                //   renderInput={(params) => <TextField fullWidth required {...params} />}
                />
              </Grid>

              <Grid size={6}>
                <DatePicker
                  label="Period To"
                  value={formData.periodTo}
                  onChange={(date) =>
                    setFormData((prev) => ({ ...prev, periodTo: date }))
                  }
                //   minDate={formData.periodFrom}
                //   maxDate={new Date()}
                slotProps={{
                    textField: {
                      fullWidth: true,
                      required: true,
                    },
                  }}
                //   renderInput={(params) => <TextField fullWidth required {...params} />}
                />
              </Grid>

              <Grid size={12}>
                <TextField
                  fullWidth
                  required
                  label="School's Postal Address"
                  value={formData.schoolPostalAddress}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, schoolPostalAddress: e.target.value }))
                  }
                />
              </Grid>
            </Grid>

            <Box mt={4} display="flex" justifyContent="space-between">
              {onPrevious && (
                <Button
                  variant="outlined"
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
                  onClick={onPrevious}
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
          </Box>
        </LocalizationProvider>
      </CardContent>
    </Box>
  );
};
