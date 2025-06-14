import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  TextField
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ContactInformationForm({ data, onNext, onPrevious }) {
  const [formData, setFormData] = useState({
    nationalIdNumber: data?.nationalIdNumber || '',
    ssnitNumber: data?.ssnitNumber || '',
    telephoneNumber: data?.telephoneNumber || '',
    emailAddress: data?.emailAddress || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-4">
      <CardHeader
        title={<Typography variant="h5">ID & Contact Information</Typography>}
        subheader="Please provide your identification and contact details"
      />
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <TextField
            fullWidth
            label="National ID Number (Ghana Card)"
            value={formData.nationalIdNumber}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, nationalIdNumber: e.target.value }))
            }
            required
          />

          <TextField
            fullWidth
            label="SSNIT Number (Optional)"
            value={formData.ssnitNumber}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, ssnitNumber: e.target.value }))
            }
          />

          <TextField
            fullWidth
            label="Telephone Number"
            type="tel"
            value={formData.telephoneNumber}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, telephoneNumber: e.target.value }))
            }
            required
          />

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

          <div className="flex justify-between pt-6">
            {onPrevious && (
              <Button
                type="button"
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
              color="primary"
              endIcon={<ArrowForwardIcon />}
              disabled={
                !formData.nationalIdNumber ||
                !formData.telephoneNumber ||
                !formData.emailAddress
              }
            >
              Next
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
