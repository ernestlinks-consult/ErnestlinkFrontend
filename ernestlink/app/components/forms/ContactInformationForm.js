import { useState } from "react";
import {
  Button,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  InputAdornment,
  Grid,
  Divider,
  TextField,
} from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

export default function ContactInformationForm({ data, onNext, onPrevious }) {
  const [formData, setFormData] = useState({
    nationalIdNumber: data.nationalIdNumber || "",
    ssnitNumber: data.ssnitNumber || "",
    telephoneNumber: data.telephoneNumber || "",
    emailAddress: data.emailAddress || "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  const formatGhanaCard = (value) => {
    const safeValue = typeof value === "string" ? value : "";
    const digits = safeValue.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 9) {
      return `GHA-${digits}`;
    }
    return `GHA-${digits.slice(0, 9)}-${digits.slice(9)}`;
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
        title={
          <Typography
            variant="h5"
            className="mb-1 font-semibold"
            sx={{ fontWeight: 600, color: "#0505AA" }}
          >
            ID & Contact Information
          </Typography>
        }
        subheader="Please provide your identification and contact details"
      />
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid size={6}>
              <TextField
                label="National ID Number (Ghana Card)"
                value={formatGhanaCard(formData.nationalIdNumber)}
                onChange={(e) => {
                  const rawDigits = (e.target.value || "")
                    .replace(/\D/g, "")
                    .slice(0, 10);
                  setFormData((prev) => ({
                    ...prev,
                    nationalIdNumber: rawDigits,
                  }));
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ marginRight: 0 }}>
                      <span
                        style={{
                          display: "inline-block",
                          transform: "translateY(-1px)",
                          fontWeight: 500,
                        }}
                      ></span>
                    </InputAdornment>
                  ),
                }}
                fullWidth
                required
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label="SSNIT Number (Optional)"
                value={formData.ssnitNumber}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    ssnitNumber: e.target.value,
                  }))
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
                  const onlyNums = e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 10); // restrict to digits and max 10
                  setFormData((prev) => ({
                    ...prev,
                    telephoneNumber: onlyNums,
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
            <Grid size={6}>
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                value={formData.emailAddress}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    emailAddress: e.target.value,
                  }))
                }
                required
              />
            </Grid>
          </Grid>
          <Divider sx={{ my: 4 }} />
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
                onClick={onPrevious}
                startIcon={<ArrowLeft />}
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
