import { Box, Paper, Typography } from '@mui/material';
import { ProfileData } from '../../constants/ProfileData';
import { SPECIALTIES } from '../../constants/specialties';
import SectionTitle from '../ui/SectionTitle';
import SectionWrapper from '../ui/SectionWrapper';

const AboutSection = () => {
  const { Summary = '' } = ProfileData;

  return (
    <SectionWrapper id="about" bg="#ffffff">
      <SectionTitle>About Me</SectionTitle>

      <Typography sx={{
        fontSize: { xs: '15px', md: '17px' },
        color: '#374151',
        lineHeight: 1.95,
        maxWidth: '840px',
        mb: { xs: 5, md: 7 },
      }}>
        {Summary}
      </Typography>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
        gap: { xs: 2.5, md: 3 },
      }}>
        {SPECIALTIES.map(spec => (
          <Paper
            key={spec.title}
            elevation={0}
            sx={{
              borderRadius: '20px',
              overflow: 'hidden',
              background: '#fff',
              border: '1px solid #E8ECF4',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              transition: 'transform 0.28s ease, box-shadow 0.28s ease',
              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow: `0 20px 48px ${spec.border}aa`,
              },
            }}
          >
            {/* Gradient top bar */}
            <Box sx={{ height: '4px', background: `linear-gradient(90deg, ${spec.color}, ${spec.border})` }} />

            <Box sx={{ p: { xs: 3, md: 3.5 } }}>
              {/* Emoji in colored circle */}
              <Box sx={{
                width: 56, height: 56, borderRadius: '16px',
                background: spec.bg, border: `1.5px solid ${spec.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '26px', mb: 2.5,
              }}>
                {spec.emoji}
              </Box>

              <Typography sx={{ fontWeight: 700, fontSize: '16px', color: spec.color, mb: 1.75 }}>
                {spec.title}
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.1 }}>
                {spec.points.map(pt => (
                  <Box key={pt} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: spec.color, mt: '6px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '13px', color: '#374151', lineHeight: 1.6 }}>{pt}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    </SectionWrapper>
  );
};

export default AboutSection;
