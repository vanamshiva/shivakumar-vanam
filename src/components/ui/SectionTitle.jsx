import { Box, Typography } from '@mui/material';

const SectionTitle = ({ children }) => (
  <Box sx={{ mb: { xs: 4.5, md: 6 } }}>
    <Typography
      sx={{
        fontSize: { xs: '28px', md: '44px' },
        fontWeight: 700,
        color: '#0F172A',
        letterSpacing: '-0.5px',
        lineHeight: 1.2,
      }}
    >
      {children}
    </Typography>
    <Box
      sx={{
        mt: 1.5,
        height: 4,
        width: 56,
        borderRadius: 2,
        background: 'linear-gradient(90deg, #6366F1, #8B5CF6)',
      }}
    />
  </Box>
);

export default SectionTitle;
