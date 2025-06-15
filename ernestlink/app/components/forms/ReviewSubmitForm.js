import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
  Grid,
  Checkbox,
  FormControlLabel,
  Button,
  Alert,
} from "@mui/material";
import { CheckCircle, Article, InsertDriveFile } from "@mui/icons-material";

export default function ReviewAndSubmit({ onPrevious, data, allData }) {
  const [confirm, setConfirm] = useState(false);

  const passportData = allData[1] || {};
  const personalData = allData[2] || {};
  const contactData = allData[3] || {};
  const residentialData = allData[4] || {};
  const educationData = allData[5] || {};
  const parentalData = allData[6] || {};
  const guarantorsData = allData[7] || {};
  const documentsData = allData[9] || {};

  const handleCheckboxChange = (event) => {
    setConfirm(event.target.checked);
  };

  const handlePrevious = () => {
    if (onPrevious) {
      onPrevious();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!confirm) return;
    console.log("Submitting application...", data); // You can replace with real submit logic
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
            Review & Submit Application
          </Typography>
        }
        subheader="Please review all the information below carefully before submitting your passport application."
      />

      <Alert severity="success" sx={{ p: 2 }}>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body2">
            All required sections have been completed. You can now submit your
            application.
          </Typography>
        </Box>
      </Alert>

      <CardContent>
        {/* Passport Application Info */}
        <Typography
          variant="subtitle1"
          color="#0505AA"
          fontWeight={600}
          gutterBottom
        >
          Passport Application Details
        </Typography>
        <Grid container spacing={2} mb={4}>
          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>Passport Type:</strong>{" "}
            {passportData.passportType.charAt(0).toUpperCase() +
              passportData.passportType.slice(1)}
          </Grid>

          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>Amount Paid:</strong> GH₵{passportData.amountPaid}
          </Grid>

          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>Payment Status:</strong> {passportData.paymentStatus}
          </Grid>

          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>Date of Birth:</strong>{" "}
            {personalData.dateOfBirth
              ? new Date(personalData.dateOfBirth).toLocaleDateString()
              : "N/A"}
          </Grid>
        </Grid>

        <Typography
          variant="subtitle1"
          color="#0505AA"
          fontWeight={600}
          gutterBottom
        >
          Personal Information
        </Typography>
        <Grid container spacing={2} mb={6}>
          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>Title:</strong> {personalData.title}
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>Surname:</strong> {personalData.surname}
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>First Name:</strong> {personalData.firstName}
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>Other Name(s):</strong> {personalData.otherNames}
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>Maiden Name:</strong> {personalData.maidenName}
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>Previous Names:</strong> {personalData.previousNames}
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>Gender:</strong>{" "}
            {personalData.gender.charAt(0).toUpperCase() +
              personalData.gender.slice(1)}
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>Date of Birth:</strong>{" "}
            {personalData.dateOfBirth
              ? new Date(personalData.dateOfBirth).toLocaleDateString()
              : "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>City/Town of Birth:</strong> {personalData.cityOfBirth}
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>Country of Birth:</strong> {personalData.countryOfBirth}
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>Height:</strong> {personalData.height} cm
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>Eye Colour:</strong> {personalData.eyeColour}
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>Hair Colour:</strong> {personalData.hairColour}
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>Visible Peculiarities:</strong>{" "}
            {personalData.visiblePeculiarities}
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>Nationality:</strong> {personalData.nationality}
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>Dual Citizenship:</strong> {personalData.dualCitizenship}
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>Marital Status:</strong> {personalData.maritalStatus}
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <strong>Profession:</strong> {personalData.profession}
          </Grid>
        </Grid>

        <Typography
          variant="subtitle1"
          color="#0505AA"
          fontWeight={600}
          gutterBottom
        >
          ID & Contact Information
        </Typography>
        <Grid container spacing={2} mb={6}>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>National ID Number:</strong>{" "}
            {contactData.nationalIdNumber
              ? `GHA-${contactData.nationalIdNumber.slice(0, 9)}${
                  contactData.nationalIdNumber.length > 9
                    ? `-${contactData.nationalIdNumber.slice(9)}`
                    : ""
                }`
              : "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>SSNIT Number:</strong> {contactData.ssnitNumber || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Telephone Number:</strong>{" "}
            {contactData.telephoneNumber || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Email Address:</strong> {contactData.emailAddress || "N/A"}
          </Grid>
        </Grid>

        <Typography
          variant="subtitle1"
          color="#0505AA"
          fontWeight={600}
          gutterBottom
        >
          Residential Information
        </Typography>
        <Grid container spacing={2} mb={6}>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>House Number:</strong>{" "}
            {residentialData.houseNumber || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Street Name:</strong> {residentialData.streetName || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Digital Address:</strong>{" "}
            {residentialData.digitalAddress || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Postal Address:</strong>{" "}
            {residentialData.postalAddress || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Suburb:</strong> {residentialData.suburb || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>City of Residence:</strong>{" "}
            {residentialData.cityOfResidence || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Country of Residence:</strong>{" "}
            {residentialData.countryOfResidence || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Postal/Zip Code:</strong>{" "}
            {residentialData.postalZipCode || "N/A"}
          </Grid>
        </Grid>

        <Typography
          variant="subtitle1"
          color="#0505AA"
          fontWeight={600}
          gutterBottom
        >
          Education
        </Typography>
        <Grid container spacing={2} mb={6}>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Institution Name:</strong>{" "}
            {educationData.institutionName || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Period From:</strong>{" "}
            {educationData.periodFrom
              ? new Date(educationData.periodFrom).toLocaleDateString()
              : "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Period To:</strong>{" "}
            {educationData.periodTo
              ? new Date(educationData.periodTo).toLocaleDateString()
              : "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>School's Postal Address:</strong>{" "}
            {educationData.schoolPostalAddress || "N/A"}
          </Grid>
        </Grid>

        <Typography
          variant="subtitle1"
          color="#0505AA"
          fontWeight={600}
          gutterBottom
        >
          Citizenship & Parental Information
        </Typography>
        <Grid container spacing={2} mb={6}>
          {/* Mother */}
          <Grid item size={{ xs: 12 }}>
            <Typography variant="h6" color="#0505AA">
              Mother
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Full Name:</strong> {parentalData.motherFullName || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Living:</strong> {parentalData.motherLiving || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Telephone:</strong> {parentalData.motherTelephone || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Email:</strong> {parentalData.motherEmail || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Hometown:</strong> {parentalData.motherHometown || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Nationality:</strong>{" "}
            {parentalData.motherNationality || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Residential Address:</strong>{" "}
            {parentalData.motherResidentialAddress || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Postal Address:</strong>{" "}
            {parentalData.motherPostalAddress || "N/A"}
          </Grid>

          {/* Father */}
          <Grid item size={{ xs: 12 }} mt={4}>
            <Typography variant="h6" color="#0505AA">
              Father
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Full Name:</strong> {parentalData.fatherFullName || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Living:</strong> {parentalData.fatherLiving || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Telephone:</strong> {parentalData.fatherTelephone || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Email:</strong> {parentalData.fatherEmail || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Hometown:</strong> {parentalData.fatherHometown || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Nationality:</strong>{" "}
            {parentalData.fatherNationality || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Residential Address:</strong>{" "}
            {parentalData.fatherResidentialAddress || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Postal Address:</strong>{" "}
            {parentalData.fatherPostalAddress || "N/A"}
          </Grid>

          {/* Grandparent */}
          <Grid item size={{ xs: 12 }} mt={4}>
            <Typography variant="h6" color="#0505AA">
              Grandparent
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Full Name:</strong>{" "}
            {parentalData.grandparentFullName || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Living:</strong> {parentalData.grandparentLiving || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Telephone:</strong>{" "}
            {parentalData.grandparentTelephone || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Email:</strong> {parentalData.grandparentEmail || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Hometown:</strong>{" "}
            {parentalData.grandparentHometown || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Nationality:</strong>{" "}
            {parentalData.grandparentNationality || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Residential Address:</strong>{" "}
            {parentalData.grandparentResidentialAddress || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Postal Address:</strong>{" "}
            {parentalData.grandparentPostalAddress || "N/A"}
          </Grid>
        </Grid>
        <Typography
          variant="subtitle1"
          color="#0505AA"
          fontWeight={600}
          gutterBottom
        >
          Guarantors
        </Typography>
        <Grid container spacing={2} mb={6}>
          {/* Guarantor 1 */}
          <Grid item size={{ xs: 12 }}>
            <Typography variant="h6" color="#0505AA">
              Guarantor 1
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Full Name:</strong>{" "}
            {guarantorsData.guarantor1FullName || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Occupation:</strong>{" "}
            {guarantorsData.guarantor1Occupation || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Telephone:</strong>{" "}
            {guarantorsData.guarantor1Telephone || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Email:</strong> {guarantorsData.guarantor1Email || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Residential Address:</strong>{" "}
            {guarantorsData.guarantor1ResidentialAddress || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Postal Address:</strong>{" "}
            {guarantorsData.guarantor1PostalAddress || "N/A"}
          </Grid>

          {/* Guarantor 2 */}
          <Grid item size={{ xs: 12 }} mt={4}>
            <Typography variant="h6" color="#0505AA">
              Guarantor 2
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Full Name:</strong>{" "}
            {guarantorsData.guarantor2FullName || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Occupation:</strong>{" "}
            {guarantorsData.guarantor2Occupation || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Telephone:</strong>{" "}
            {guarantorsData.guarantor2Telephone || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Email:</strong> {guarantorsData.guarantor2Email || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Residential Address:</strong>{" "}
            {guarantorsData.guarantor2ResidentialAddress || "N/A"}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <strong>Postal Address:</strong>{" "}
            {guarantorsData.guarantor2PostalAddress || "N/A"}
          </Grid>
        </Grid>

        <Typography
          variant="subtitle1"
          color="#0505AA"
          fontWeight={600}
          gutterBottom
        >
          Uploaded Documents
        </Typography>

        <Grid container spacing={2} mb={6}>
          {[
            {
              key: "biometricBirthCertificate",
              title: "Biometric Birth Certificate",
            },
            {
              key: "passportPicture",
              title: "Passport Picture",
            },
            {
              key: "ghanaCardFront",
              title: "Ghana Card (Front)",
            },
            {
              key: "ghanaCardBack",
              title: "Ghana Card (Back)",
            },
          ].map((doc) => {
            const file = documentsData[doc.key];

            return (
              <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 3 }} key={doc.key}>
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight={600}>
                      {doc.title}
                    </Typography>

                    {file ? (
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        p={2}
                        bgcolor="#f0fff4"
                        borderRadius={2}
                      >
                        <Box display="flex" alignItems="center" gap={2}>
                          <InsertDriveFile />
                          <Box>
                            <Typography variant="body2">
                              {file.name || file}
                            </Typography>
                            <Typography variant="caption">
                              {typeof file === "object" && file.size
                                ? `${(file.size / 1024 / 1024).toFixed(2)} MB • ${
                                    file.type?.split("/")[1]?.toUpperCase() ||
                                    ""
                                  }`
                                : ""}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    ) : (
                      <Typography variant="body2" color="text.secondary">
                        Not uploaded
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Confirmation */}
        <Box mb={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={confirm}
                onChange={handleCheckboxChange}
                sx={{
                  "&.Mui-checked": {
                    color: "#0505AA",
                  },
                }}
              />
            }
            label={
              <Typography variant="body2">
                I confirm that all information provided is true and correct.
              </Typography>
            }
          />
        </Box>

        {/* Submit */}
        <form onSubmit={handleSubmit}>
          <Box display="flex" justifyContent="space-between" mt={4}>
            <Button
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
              variant="outlined"
              type="button"
              onClick={handlePrevious}
            >
              Previous
            </Button>
            <Button
              sx={{
                color: "#fff",
                borderColor: "#0505AA",
                bgcolor: "#0505AA",
                textTransform: "none",
                fontWeight: 400,
              }}
              variant="contained"
              type="submit"
              disabled={!confirm}
            >
              Submit Application
            </Button>
          </Box>
        </form>
      </CardContent>
    </Box>
  );
}
