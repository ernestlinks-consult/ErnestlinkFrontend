export const inputFieldStyle = {
  '& label': {
    color: '#8d6e63', // Inactive label
  },
  '& label.Mui-focused': {
    color: '#0505AA', // Focused label
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#8d6e63', // Inactive border
    },
    '&:hover fieldset': {
      borderColor: '#0505AA', // Hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0505AA', // Focused
    },
  },
};