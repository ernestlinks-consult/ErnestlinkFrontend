"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  // BorderLinearProgress,
  IconButton,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import PassportApplicationForm from "./forms/PassportApplicationForm";
import PersonalInformationForm from "./forms/PersonalInformationForm";
import ContactInformationForm from "./forms/ContactInformationForm.js";
import ResidentialInformationForm from "./forms/ResidentialInformationForm";
import EducationForm from "./forms/EducationForm";
import ParentalInformationForm from "./forms/ParentalInformationForm";
import DocumentUploadsForm from "./forms/DocumentUploadsForm";
import GuarantorsForm from "./forms/GuarantorsForm";
import WitnessForm from "./forms/WitnessForm";
import ReviewSubmitForm from "./forms/ReviewSubmitForm";
import { useRouter } from "next/navigation";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#0505AA",
    ...theme.applyStyles("dark", {
      backgroundColor: "#F8FAFC",
    }),
  },
}));

export const RegistrationFlow = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const totalSteps = 10;
  const progress = (currentStep / totalSteps) * 100;
  const router = useRouter();

  const steps = [
    {
      id: 1,
      title: "Passport Application Details",
      component: PassportApplicationForm,
    },
    {
      id: 2,
      title: "Personal Information",
      component: PersonalInformationForm,
    },
    {
      id: 10,
      title: "ID & Contact Information",
      component: ContactInformationForm,
    },
    {
      id: 4,
      title: "Residential Information",
      component: ResidentialInformationForm,
    },
    { 
      id: 5, 
      title: "Education", 
      component: EducationForm 
    },
    {
      id: 6,
      title: "Citizenship & Parental Info",
      component: ParentalInformationForm,
    },
    { id: 7, 
      title: "Guarantors", 
      component: GuarantorsForm 
    },
    { id: 8, 
      title: "Witness", 
      component: WitnessForm 
    },
    { id: 9, 
      title: "Document Uploads", 
      component: DocumentUploadsForm 
    },
    { id: 3, 
      title: "Review & Submit", 
      component: ReviewSubmitForm },
  ];

  const currentStepData = steps.find((step) => step.id === currentStep);
  const CurrentFormComponent = currentStepData?.component;

  const handleNext = (stepData) => {
    setFormData((prev) => ({ ...prev, [currentStep]: stepData }));
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (finalData) => {
    const completeData = { ...formData, [currentStep]: finalData };
    console.log("Final submission data:", completeData);
    alert("Application submitted successfully!");
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f9fafb" }}>
      {/* Header */}
      <Container
        maxWidth="xl"
        sx={{
          py: 4,
          width: "100%",
          overflow: "auto",
          pb: 5,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          pb={2}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={onBack}
            // variant="outlined"
            sx={{ color: "#0505AA" }}
          >
            {/* Back to Home */}
          </Button>

          <Box textAlign="center" flex={1}>
            <Typography variant="h6">
              Step {currentStep} of {totalSteps}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {currentStepData?.title}
            </Typography>
          </Box>

          <Box width={60} textAlign="right">
            <Typography variant="body2" fontWeight={500}>
              {Math.round(progress)}%
            </Typography>
          </Box>
        </Stack>
        <BorderLinearProgress
          variant="determinate"
          value={progress}
          sx={{ mb: 1 }}
        />
      </Container>

      {/* Form Content */}
      <Container maxWidth="xl">
        {CurrentFormComponent && (
          <CurrentFormComponent
            data={formData[currentStep] || {}}
            onNext={currentStep === totalSteps ? handleSubmit : handleNext}
            onPrevious={currentStep > 1 ? handlePrevious : undefined}
            allData={formData}
          />
        )}
      </Container>
    </Box>
  );
};

export default RegistrationFlow;
