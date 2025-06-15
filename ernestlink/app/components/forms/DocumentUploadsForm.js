import { useState, useRef } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Button,
  Grid,
  IconButton,
  Chip,
  Tooltip,
  Stack,
  Divider,
} from "@mui/material";
import {
  CloudUpload,
  InsertDriveFile,
  Delete,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
} from "@mui/icons-material";


function DocumentUploadsForm({ data, onNext, onPrevious }) {
  const [uploads, setUploads] = useState({
    biometricBirthCertificate: data.biometricBirthCertificate || null,
    passportPicture: data.passportPicture || null,
    ghanaCardFront: data.ghanaCardFront || null,
    ghanaCardBack: data.ghanaCardBack || null,
  });

  const fileInputRefs = {
    biometricBirthCertificate: useRef(null),
    passportPicture: useRef(null),
    ghanaCardFront: useRef(null),
    ghanaCardBack: useRef(null),
  };

  const documents = [
    {
      key: "biometricBirthCertificate",
      title: "Biometric Birth Certificate",
      description: "Upload your biometric birth certificate (PDF, JPG, PNG)",
      required: true,
    },
    {
      key: "passportPicture",
      title: "Passport Picture",
      description: "Upload your passport-sized photograph (JPG, PNG)",
      required: true,
    },
    {
      key: "ghanaCardFront",
      title: "Ghana Card (Front)",
      description: "Upload the front side of your Ghana Card (PDF, JPG, PNG)",
      required: true,
    },
    {
      key: "ghanaCardBack",
      title: "Ghana Card (Back)",
      description: "Upload the back side of your Ghana Card (PDF, JPG, PNG)",
      required: true,
    },
  ];

  const handleFileUpload = (documentKey, event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be less than 10MB");
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/jpg",
      "image/png",
    ];
    if (!allowedTypes.includes(file.type)) {
      alert("Only PDF, JPG, and PNG files are allowed");
      return;
    }

    setUploads((prev) => ({
      ...prev,
      [documentKey]: file,
    }));
  };

  const removeFile = (documentKey) => {
    setUploads((prev) => ({
      ...prev,
      [documentKey]: null,
    }));
    if (fileInputRefs[documentKey]?.current) {
      fileInputRefs[documentKey].current.value = "";
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const missingDocs = documents.filter(
      (doc) => doc.required && !uploads[doc.key]
    );
    if (missingDocs.length > 0) {
      alert(`Please upload: ${missingDocs.map((doc) => doc.title).join(", ")}`);
      return;
    }
    onNext(uploads);
  };

  const allRequiredUploaded = documents
    .filter((doc) => doc.required)
    .every((doc) => uploads[doc.key]);

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
        title={<Typography variant="h5" className="mb-1 font-semibold" sx={{ fontWeight: 600, color: "#0505AA" }}>Document Uploads</Typography>}
        subheader="Upload required documents in PDF, JPG, or PNG format (max 10MB each)."
      />

      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {documents.map((document) => {
              const uploadedFile = uploads[document.key];
              const isUploaded = !!uploadedFile;

              return (
                <Grid item size={{ xs: 12, md: 6 }} key={document.key}>
                  <Card variant="outlined" sx={{ height: "100%" }}>
                    <CardContent
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <Box display="flex" alignItems="center" gap={1}>
                        <Typography variant="subtitle1" fontWeight={600}>
                          {document.title}
                        </Typography>
                        {document.required && (
                          <Chip label="Required" color="error" size="small"/>
                        )}
                        {isUploaded && (
                          <CheckCircle fontSize="small" color="success"/>
                        )}
                      </Box>

                      <Typography variant="body2" color="text.secondary">
                        {document.description}
                      </Typography>

                      {!isUploaded ? (
                        <Box
                          onClick={() =>
                            fileInputRefs[document.key]?.current?.click()
                          }
                          sx={{
                            border: "2px dashed #ccc",
                            borderRadius: 2,
                            py: 4,
                            textAlign: "center",
                            cursor: "pointer",
                            "&:hover": {
                              borderColor: "primary.main",
                              bgcolor: "rgba(0, 123, 255, 0.05)",
                            },
                          }}
                        >
                          <CloudUpload fontSize="large" color="disabled" />
                          <Typography variant="body1">
                            Click to upload
                          </Typography>
                          <Typography variant="caption">
                            PDF, JPG, PNG up to 10MB
                          </Typography>
                        </Box>
                      ) : (
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
                                {uploadedFile.name}
                              </Typography>
                              <Typography
                                variant="caption"
                                // color="#0505AA"
                              >
                                {formatFileSize(uploadedFile.size)} •{" "}
                                {uploadedFile.type
                                  ?.split("/")[1]
                                  ?.toUpperCase()}
                              </Typography>
                            </Box>
                          </Box>
                          <Tooltip title="Remove">
                            <IconButton
                              onClick={() => removeFile(document.key)}
                              sx={{
                                color: "#FF5C5C",
                                "&:hover": {
                                  color: "red",
                                },
                              }}
                            >
                              <Delete fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      )}

                      <input
                        ref={fileInputRefs[document.key]}
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileUpload(document.key, e)}
                        style={{ display: "none" }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          <Divider sx={{ my: 4 }} />

          <Box display="flex" justifyContent="space-between">
            {onPrevious && (
              <Button
                variant="outlined"
                onClick={onPrevious}
                startIcon={<ArrowLeft />}
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
              sx={{color: "#fff",
                textTransform: "none",
                fontWeight: 400,
                bgcolor: "#0505AA",
              }}
              endIcon={<ArrowRight />}
              disabled={!allRequiredUploaded}
            >
              Next
            </Button>
          </Box>
        </form>
      </CardContent>
    </Box>
  );
}

export default DocumentUploadsForm;
