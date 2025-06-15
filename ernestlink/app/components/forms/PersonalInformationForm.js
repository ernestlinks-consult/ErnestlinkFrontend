import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  CardHeader,
  CardContent,
  FormLabel,
  Divider
} from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export default function PersonalInformationForm({ data, onNext, onPrevious }) {
  const [formData, setFormData] = useState({
    title: data.title || "",
    surname: data.surname || "",
    firstName: data.firstName || "",
    otherNames: data.otherNames || "",
    maidenName: data.maidenName || "",
    previousNames: data.previousNames || "",
    gender: data.gender || "",
    dateOfBirth: data.dateOfBirth || null,
    cityOfBirth: data.cityOfBirth || "",
    countryOfBirth: data.countryOfBirth || "",
    height: data.height || "",
    eyeColour: data.eyeColour || "",
    hairColour: data.hairColour || "",
    visiblePeculiarities: data.visiblePeculiarities || "",
    nationality: data.nationality || "Ghanaian",
    dualCitizenship: data.dualCitizenship || "",
    maritalStatus: data.maritalStatus || "",
    profession: data.profession || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  const titles = ["Mr", "Mrs", "Miss", "Ms", "Dr", "Prof", "Rev", "Chief"];
  const maritalStatuses = [
    "Single",
    "Married",
    "Divorced",
    "Widowed",
    "Separated",
  ];

  return (
    <Box
      component="form"
      sx={{
        flex: 1,
        minHeight: { xs: "30px", sm: "10vh" },
        p: 3,
        border: "2px solid #007BFF30",
        borderRadius: 2,
        bgcolor: "#F8F8FF",
      }}
      onSubmit={handleSubmit}
    >
      <CardHeader
        title={
          <Typography
            variant="h5"
            className="mb-1 font-semibold"
            sx={{ fontWeight: 600, color: "#0505AA" }}
          >
            Personal Information
          </Typography>
        }
        subheader="Please provide your personal details as they appear on your official documents."
      />
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={6}>
          <FormControl fullWidth>
            <InputLabel>Title</InputLabel>
            <Select
              value={formData.title}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
              label="Title"
            >
              {titles.map((title) => (
                <MenuItem key={title} value={title}>
                  {title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid size={6}>
          <TextField
            label="Surname"
            value={formData.surname || ""}
            onChange={(e) => {
              const value = e.target.value || "";
              const textOnly = value.replace(/[0-9]/g, "");
              setFormData((prev) => ({ ...prev, surname: textOnly }));
            }}
            fullWidth
            required
          />
        </Grid>

        <Grid size={6}>
          <TextField
            label="First Name"
            value={formData.firstName}
            onChange={(e) => {
              const value = e.target.value || "";
              const textOnly = e.target.value.replace(/[0-9]/g, "");
              setFormData((prev) => ({ ...prev, firstName: textOnly }));
            }}
            fullWidth
            required
          />
        </Grid>

        <Grid size={6}>
          <TextField
            label="Other Name(s)"
            value={formData.otherNames}
            onChange={(e) => {
              const value = e.target.value || "";
              const textOnly = e.target.value.replace(/[0-9]/g, "");
              setFormData((prev) => ({ ...prev, otherNames: textOnly }));
            }}
            fullWidth
          />
        </Grid>

        <Grid size={6}>
          <TextField
            label="Maiden Name"
            value={formData.maidenName}
            onChange={(e) => {
              const value = e.target.value || "";
              const textOnly = e.target.value.replace(/[0-9]/g, "");
              setFormData((prev) => ({ ...prev, maidenName: textOnly }));
            }}
            fullWidth
          />
        </Grid>

        <Grid size={6}>
          <TextField
            label="Previous Names"
            value={formData.previousNames}
            onChange={(e) => {
              const value = e.target.value || "";
              const textOnly = e.target.value.replace(/[0-9]/g, "");
              setFormData((prev) => ({ ...prev, previousNames: textOnly }));
            }}
            fullWidth
          />
        </Grid>

        <Grid size={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              value={formData.gender}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid size={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date of Birth"
              value={formData.dateOfBirth}
              onChange={(date) =>
                setFormData((prev) => ({ ...prev, dateOfBirth: date }))
              }
              renderInput={(params) => <TextField fullWidth {...params} />}
              slotProps={{
                textField: {
                  fullWidth: true,
                  required: true,
                },
              }}
            />
          </LocalizationProvider>
        </Grid>

        <Grid size={6}>
          <TextField
            label="City/Town of Birth"
            value={formData.cityOfBirth}
            onChange={(e) => {
              const value = e.target.value || "";
              const textOnly = e.target.value.replace(/[0-9]/g, "");
              setFormData((prev) => ({ ...prev, cityOfBirth: textOnly }));
            }}
            fullWidth
            required
          />
        </Grid>

        <Grid size={12}>
          <TextField
            label="Country of Birth"
            value={formData.countryOfBirth}
            onChange={(e) => {
              const value = e.target.value || "";
              const textOnly = e.target.value.replace(/[0-9]/g, "");
              setFormData((prev) => ({ ...prev, countryOfBirth: textOnly }));
            }}
            fullWidth
            required
          />
        </Grid>

        <Grid size={4}>
          <TextField
            label="Height (cm)"
            type="number"
            value={formData.height}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, height: e.target.value }))
            }
            fullWidth
            required
          />
        </Grid>

        <Grid size={4}>
          <TextField
            label="Eye Colour"
            value={formData.eyeColour}
            onChange={(e) => {
              const value = e.target.value || "";
              const textOnly = e.target.value.replace(/[0-9]/g, "");
              setFormData((prev) => ({ ...prev, eyeColour: textOnly }));
            }}
            fullWidth
            required
          />
        </Grid>

        <Grid size={4}>
          <TextField
            label="Hair Colour"
            value={formData.hairColour}
            onChange={(e) => {
              const value = e.target.value || "";
              const textOnly = e.target.value.replace(/[0-9]/g, "");
              setFormData((prev) => ({ ...prev, hairColour: textOnly }));
            }}
            fullWidth
            required
          />
        </Grid>

        <Grid size={12}>
          <TextField
            label="Visible Peculiarities"
            type="text"
            value={formData.visiblePeculiarities}
            onChange={(e) => {
              const value = e.target.value || "";
              const textOnly = e.target.value.replace(/[0-9]/g, "");
              setFormData((prev) => ({
                ...prev,
                visiblePeculiarities: textOnly,
              }));
            }}
            fullWidth
            multiline
          />
        </Grid>

        <Grid size={6}>
          <TextField
            label="Nationality"
            value={formData.nationality}
            fullWidth
          />
        </Grid>

        <Grid size={6}>
          <TextField
            label="Dual Citizenship"
            type="text"
            value={formData.dualCitizenship}
            onChange={(e) => {
              const value = e.target.value || "";
              const textOnly = e.target.value.replace(/[0-9]/g, "");
              setFormData((prev) => ({
                ...prev,
                dualCitizenship: textOnly,
              }));
            }}
            fullWidth
          />
        </Grid>

        <Grid size={6}>
          <FormControl fullWidth>
            <InputLabel>Marital Status</InputLabel>
            <Select
              value={formData.maritalStatus}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  maritalStatus: e.target.value,
                }))
              }
              label="Marital Status"
            >
              {maritalStatuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid size={6}>
          <TextField
            label="Profession"
            value={formData.profession}
            onChange={(e) => {
              const value = e.target.value || "";
              const textOnly = e.target.value.replace(/[0-9]/g, "");
              setFormData((prev) => ({
                ...prev,
                profession: textOnly,
              }));
            }}
            fullWidth
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
            !formData.title ||
            !formData.surname ||
            !formData.firstName ||
            !formData.gender ||
            !formData.dateOfBirth ||
            !formData.cityOfBirth ||
            !formData.countryOfBirth ||
            !formData.height ||
            !formData.eyeColour ||
            !formData.hairColour ||
            !formData.countryOfBirth ||
            !formData.nationality ||
            !formData.countryOfBirth ||
            !formData.profession ||
            !formData.maritalStatus
          }
        >
          Next
        </Button>
      </Box>
    </Box>
    // </Box>
  );
}
