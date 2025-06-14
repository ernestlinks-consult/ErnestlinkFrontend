import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  LinearProgress,
  IconButton,
  Stack,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { PassportApplicationForm } from '../components/forms/PassportApplicationForm';
import { PersonalInformationForm } from '../components/forms/PersonalInformationForm';
import { ContactInformationForm } from '../components/forms/ContactInformationForm';
import { ResidentialInformationForm } from '../components/forms/ResidentialInformationForm';
import { EducationForm } from '../components/forms/EducationForm';
import { ParentalInformationForm } from '../components/forms/ParentalInformationForm';
import { DocumentUploadsForm } from '../components/forms/DocumentUploadsForm';
import { GuarantorsForm } from '../components/forms/GuarantorsForm';
import { WitnessForm } from '../components/forms/WitnessForm';
import { ReviewSubmitForm } from '../components/forms/ReviewSubmitForm';

export const RegistrationFlow = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const totalSteps = 10;
  const progress = (currentStep / totalSteps) * 100;

  const steps = [
    { id: 1, title: 'Passport Application Details', component: PassportApplicationForm },
    { id: 2, title: 'Personal Information', component: PersonalInformationForm },
    { id: 3, title: 'ID & Contact Information', component: ContactInformationForm },
    { id: 4, title: 'Residential Information', component: ResidentialInformationForm },
    { id: 5, title: 'Education', component: EducationForm },
    { id: 6, title: 'Citizenship & Parental Info', component: ParentalInformationForm },
    { id: 7, title: 'Document Uploads', component: DocumentUploadsForm },
    { id: 8, title: 'Guarantors', component: GuarantorsForm },
    { id: 9, title: 'Witness', component: WitnessForm },
    { id: 10, title: 'Review & Submit', component: ReviewSubmitForm },
  ];

  const currentStepData = steps.find(step => step.id === currentStep);
  const CurrentFormComponent = currentStepData?.component;

  const handleNext = (stepData) => {
    setFormData(prev => ({ ...prev, [currentStep]: stepData }));
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
    console.log('Final submission data:', completeData);
    alert('Application submitted successfully!');
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
      {/* Header */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'white', boxShadow: 1 }}>
        <Container maxWidth="md">
          <Stack direction="row" alignItems="center" justifyContent="space-between" py={2}>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={onBack}
              variant="outlined"
              color="primary"
            >
              Back to Home
            </Button>

            <Box textAlign="center" flex={1}>
              <Typography variant="h6">Step {currentStep} of {totalSteps}</Typography>
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
          <LinearProgress variant="determinate" value={progress} sx={{ mb: 1 }} />
        </Container>
      </Box>
      {/* Form Content */}
      <Container maxWidth="md" sx={{ py: 4 }}>
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