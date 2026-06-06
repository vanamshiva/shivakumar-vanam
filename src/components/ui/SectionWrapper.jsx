import { Box } from '@mui/material';

const SectionWrapper = ({ id, bg = '#fff', children }) => (
  <Box id={id} sx={{ background: bg, py: { xs: '72px', md: '104px' } }}>
    <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, md: 4 } }}>
      {children}
    </Box>
  </Box>
);

export default SectionWrapper;
