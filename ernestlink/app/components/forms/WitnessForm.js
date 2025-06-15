import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Alert,
  AlertTitle,
} from "@mui/material";
import { ArrowLeft, ArrowRight, WarningAmber } from "@mui/icons-material";

function WitnessForm({ data, onNext, onPrevious }) {
  const [formData, setFormData] = useState({
    witnessFullName: data.witnessFullName || "AKUOKO ERNEST",
    witnessOccupation: data.witnessOccupation || "EDUCATIONAL CONSULTANT",
    witnessTelephone: data.witnessTelephone || "0554223970",
    witnessEmail: data.witnessEmail || "consult.ernestlinks@gmail.com",
    witnessResidentialAddress: data.witnessResidentialAddress || "KOTEI",
    witnessPostalAddress: data.witnessPostalAddress || "AO-K508-8556",
    witnessIdOrPassportNo: data.witnessIdOrPassportNo || "G2809151",
    witnessPlaceOfIssue: data.witnessPlaceOfIssue || "ACCRA",
    witnessDateOfIssue: data.witnessDateOfIssue || "2023-12-02",
  });

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
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
        title={
          <Typography variant="h5" className="mb-1 font-semibold" sx={{ fontWeight: 600, color: "#0505AA" }}>
            Witness (To be filled by the Admin)
          </Typography>
        }
        subheader="This section should be completed by an authorized administrator. The
        witness must have a valid stamp and be one of the qualified
        professionals listed below."
      />
      <CardContent>
        <Alert severity="warning" sx={{ mb: 3 }} icon={<WarningAmber />}>
          <AlertTitle>Important</AlertTitle>
          The witness must be one of the following: Pastor, Lawyer, Doctor,
          Engineer, Managing Director, or Head Master, and must have a valid
          official stamp.
        </Alert>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                required
                label="Full Name"
                value={formData.witnessFullName}
                onChange={handleChange("witnessFullName")}
                disabled
              />
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }}>
              <FormControl fullWidth required>
                <InputLabel>Occupation</InputLabel>
                <Select
                  value={formData.witnessOccupation}
                  onChange={handleChange("witnessOccupation")}
                  label="Occupation"
                  disabled
                >
                    <MenuItem key={formData.witnessOccupation} value={formData.witnessOccupation}>
                      {formData.witnessOccupation}
                    </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                required
                label="Telephone"
                type="tel"
                value={formData.witnessTelephone}
                onChange={handleChange("witnessTelephone")}
                disabled
              />
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                required
                label="Email"
                type="email"
                value={formData.witnessEmail}
                onChange={handleChange("witnessEmail")}
                disabled
              />
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                required
                label="Residential Address"
                value={formData.witnessResidentialAddress}
                onChange={handleChange("witnessResidentialAddress")}
                disabled
              />
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                required
                label="Postal Address"
                value={formData.witnessPostalAddress}
                onChange={handleChange("witnessPostalAddress")}
                disabled
              />
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                required
                label="ID or Passport Number"
                value={formData.witnessIdOrPassportNo}
                onChange={handleChange("witnessIdOrPassportNo")}
                disabled
              />
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                required
                label="Place of Issue"
                value={formData.witnessPlaceOfIssue}
                onChange={handleChange("witnessPlaceOfIssue")}
                disabled
              />
            </Grid>

            <Grid item size={{ xs: 12 }}>
              <TextField
                fullWidth
                required
                label="Date of Issue"
                type="date"
                // InputLabelProps={{ shrink: true }}
                value={formData.witnessDateOfIssue}
                onChange={handleChange("witnessDateOfIssue")}
                disabled
              />
            </Grid>
          </Grid>

          <Box mt={4} display="flex" justifyContent="space-between">
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
              sx={{color: "#fff",
                textTransform: "none",
                fontWeight: 400,
                bgcolor: "#0505AA",
              }}
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

export default WitnessForm;
