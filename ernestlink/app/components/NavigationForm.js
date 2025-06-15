import { Box, Button } from "@mui/material";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NavigationButtons({ onPrevious, onNext, isLastStep = false }) {
  return (
    <Box display="flex" justifyContent="space-between" mt={4}>
      {onPrevious && (
        <Button
          variant="outlined"
          onClick={onPrevious}
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
          textTransform: "none",
          fontWeight: 400,
          bgcolor: "#0505AA",
        }}
        endIcon={<ArrowRight />}
        onClick={onNext}
      >
        {isLastStep ? "Finish" : "Next"}
      </Button>
    </Box>
  );
};
