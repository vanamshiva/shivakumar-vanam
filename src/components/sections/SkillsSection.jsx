import { Box, Chip, Paper, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ProfileData } from '../../constants/ProfileData';
import { CATEGORY_STYLES } from '../../constants/CssStyles';
import SectionTitle from '../ui/SectionTitle';
import SectionWrapper from '../ui/SectionWrapper';

const marquee = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

const SkillsSection = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const { Skills = [], SkillCategories = [] } = ProfileData;

  return (
    <SectionWrapper id="skills" bg="#F8FAFC">
      <SectionTitle>Technical Skills</SectionTitle>

      {/* Smooth infinite marquee */}
      <Box sx={{
        mb: { xs: 4, md: 6 },
        py: { xs: 2, md: 3 },
        borderRadius: '20px',
        background: '#fff',
        border: '1px solid #E2E8F0',
        boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
        overflow: 'hidden',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute', top: 0, bottom: 0, left: 0,
          width: '80px', zIndex: 1,
          background: 'linear-gradient(to right, #fff, transparent)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute', top: 0, bottom: 0, right: 0,
          width: '80px', zIndex: 1,
          background: 'linear-gradient(to left, #fff, transparent)',
          pointerEvents: 'none',
        },
      }}>
        <Box sx={{
          display: 'flex',
          gap: { xs: 2, md: 3 },
          width: 'max-content',
          px: 2,
          animation: `${marquee} 28s linear infinite`,
          '&:hover': { animationPlayState: 'paused' },
        }}>
          {[...Skills, ...Skills].map((skill, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', gap: 1,
                px: { xs: 2, md: 3 }, py: { xs: 1.5, md: 2 },
                borderRadius: '14px',
                border: '1px solid #F1F5F9',
                background: '#FAFBFC',
                minWidth: { xs: '84px', md: '110px' },
                transition: 'all 0.22s ease',
                cursor: 'default',
                '&:hover': {
                  background: 'linear-gradient(135deg, #EEF2FF, #F5F3FF)',
                  borderColor: '#C7D2FE',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 20px rgba(99,102,241,0.12)',
                },
              }}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                style={{ width: isMobile ? 42 : 56, height: isMobile ? 42 : 56, objectFit: 'contain' }}
              />
              <Typography sx={{ fontSize: { xs: '10px', md: '12px' }, fontWeight: 600, color: '#64748B', whiteSpace: 'nowrap' }}>
                {skill.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Skill category cards */}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(224px, 1fr))', gap: 2 }}>
        {SkillCategories.map(({ category, skills }) => {
          const s = CATEGORY_STYLES[category] || CATEGORY_STYLES['Version Control'];
          return (
            <Paper
              key={category}
              elevation={0}
              sx={{
                p: 2.5,
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                borderLeft: `3px solid ${s.h}`,
                background: '#fff',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: `0 12px 32px ${s.b}80`,
                },
              }}
            >
              <Typography sx={{
                fontSize: '10px', fontWeight: 700, color: s.h,
                textTransform: 'uppercase', letterSpacing: '1.2px', mb: 1.5,
              }}>
                {category}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {skills.map(skill => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      bgcolor: s.bg, color: s.c, border: `1px solid ${s.b}`,
                      fontWeight: 500, fontSize: '11px', height: '24px',
                      transition: 'all 0.15s ease',
                      '&:hover': { opacity: 0.85, cursor: 'default' },
                    }}
                  />
                ))}
              </Box>
            </Paper>
          );
        })}
      </Box>
    </SectionWrapper>
  );
};

export default SkillsSection;
