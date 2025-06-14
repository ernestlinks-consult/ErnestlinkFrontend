"use client"
import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  TextField,
  Item,
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function PassportApplicationForm({ data, onNext }) {
  const [formData, setFormData] = useState({
    passportType: data?.passportType || '',
    amountPaid: data?.amountPaid || '',
    paymentStatus: data?.paymentStatus || '',
    dateOfRegistration: data?.dateOfRegistration || null,
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
        bgcolor: "#fff",
      }}>
      <CardHeader
        title={<Typography variant="h5" className="mb-1 font-semibold">
            Passport Application Details
          </Typography>}
        subheader="Please provide the basic details for your passport application"
      />
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-100">
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid size={6}>
              <FormControl fullWidth>
                <InputLabel id="passportType-label">Passport Type</InputLabel>
                <Select
                  labelId="passportType-label"
                  value={formData.passportType}
                  label="Passport Type"
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, passportType: e.target.value }))
                  }
                  required
                >
                  <MenuItem value="standard">Standard</MenuItem>
                  <MenuItem value="express">Express</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label="Amount Paid (GHS)"
                type="number"
                value={formData.amountPaid}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, amountPaid: e.target.value }))
                }
                required
              />
            </Grid>
            <Grid size={6}>
              <FormControl fullWidth>
                <InputLabel id="paymentStatus-label">Payment Status</InputLabel>
                <Select
                  labelId="paymentStatus-label"
                  value={formData.paymentStatus}
                  label="Payment Status"
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, paymentStatus: e.target.value }))
                  }
                  required
                >
                  <MenuItem value="paid">Paid</MenuItem>
                  <MenuItem value="pending">Pending</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid size={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date of Registration"
                  value={formData.dateOfRegistration}
                  onChange={(newValue) =>
                    setFormData((prev) => ({
                      ...prev,
                      dateOfRegistration: newValue,
                    }))
                  }
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      required: true,
                      InputProps: {
                        endAdornment: <CalendarTodayIcon />,
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          
          <Box display="flex" justifyContent="flex-end" pt={3}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              disabled={
                !formData.passportType ||
                !formData.amountPaid ||
                !formData.paymentStatus ||
                !formData.dateOfRegistration
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
