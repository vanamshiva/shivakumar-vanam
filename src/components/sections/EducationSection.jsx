import { Box, Chip, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { ProfileData } from '../../constants/ProfileData';
import SectionTitle from '../ui/SectionTitle';
import SectionWrapper from '../ui/SectionWrapper';

const certAccent = (status) => {
  if (status === 'In Progress') return { color: '#D97706', bg: '#FEF3C7', border: '#FCD34D' };
  if (status === 'Achievement')  return { color: '#9333EA', bg: '#F5F3FF', border: '#DDD6FE' };
  return { color: '#059669', bg: '#D1FAE5', border: '#6EE7B7' };
};

const EducationSection = () => {
  const { Education = [], Certifications = [] } = ProfileData;

  return (
    <SectionWrapper id="education" bg="#F8FAFC">
      <SectionTitle>Education &amp; Certifications</SectionTitle>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 3fr' }, gap: { xs: 2.5, md: 3 } }}>

        {/* Education — timeline */}
        <Box sx={{
          background: '#fff',
          border: '1px solid #E8ECF4',
          borderRadius: '20px',
          p: { xs: 3, md: 4 },
          boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3.5 }}>
            <Box sx={{ p: 1.25, borderRadius: '12px', background: '#EEF2FF', display: 'flex' }}>
              <SchoolIcon sx={{ color: '#6366F1', fontSize: '22px' }} />
            </Box>
            <Typography sx={{ fontWeight: 700, fontSize: { xs: '17px', md: '19px' }, color: '#0F172A' }}>
              Education
            </Typography>
          </Box>

          {/* Timeline */}
          <Box sx={{ position: 'relative', pl: { xs: 3.5, md: 4 } }}>
            {/* Vertical line */}
            <Box sx={{
              position: 'absolute',
              left: { xs: '10px', md: '11px' },
              top: '10px', bottom: '0',
              width: '2px',
              background: 'linear-gradient(to bottom, #6366F1 60%, transparent)',
              borderRadius: '1px',
            }} />

            {Education.map((edu) => (
              <Box key={edu.degree} sx={{ position: 'relative' }}>
                {/* Dot */}
                <Box sx={{
                  position: 'absolute',
                  left: { xs: '-26px', md: '-29px' },
                  top: '6px',
                  width: '16px', height: '16px',
                  borderRadius: '50%',
                  background: '#6366F1',
                  border: '3px solid #fff',
                  boxShadow: '0 0 0 2px #6366F1',
                  zIndex: 1,
                }} />

                <Typography sx={{ fontWeight: 700, fontSize: { xs: '15px', md: '17px' }, color: '#0F172A' }}>
                  {edu.degree}
                </Typography>
                <Typography sx={{ color: '#6366F1', fontWeight: 600, fontSize: '14px', mt: 0.5 }}>
                  {edu.institution}
                </Typography>
                <Typography sx={{ color: '#94A3B8', fontSize: '13px', mt: 0.4 }}>
                  {edu.duration} · {edu.location}
                </Typography>
                {edu.cgpa && (
                  <Box sx={{
                    display: 'inline-flex', alignItems: 'center', gap: 0.75,
                    mt: 1.25, px: 1.5, py: 0.5,
                    borderRadius: '50px',
                    background: '#EEF2FF', border: '1px solid #C7D2FE',
                  }}>
                    <Typography sx={{ fontSize: '12px', fontWeight: 700, color: '#4338CA' }}>
                      CGPA: {edu.cgpa}
                    </Typography>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Certifications */}
        <Box sx={{
          background: '#fff',
          border: '1px solid #E8ECF4',
          borderRadius: '20px',
          p: { xs: 3, md: 4 },
          boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3.5 }}>
            <Box sx={{ p: 1.25, borderRadius: '12px', background: '#FEF3C7', display: 'flex' }}>
              <WorkspacePremiumIcon sx={{ color: '#B45309', fontSize: '22px' }} />
            </Box>
            <Typography sx={{ fontWeight: 700, fontSize: { xs: '17px', md: '19px' }, color: '#0F172A' }}>
              Certifications &amp; Achievements
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {Certifications.map(cert => {
              const a = certAccent(cert.status);
              return (
                <Box
                  key={cert.title}
                  sx={{
                    display: 'flex', alignItems: 'flex-start', gap: 2,
                    p: 2.25, borderRadius: '14px',
                    border: '1px solid #F1F5F9',
                    borderLeft: `3px solid ${a.color}`,
                    background: '#FAFBFC',
                    transition: 'all 0.22s ease',
                    '&:hover': {
                      background: '#fff',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                      transform: 'translateX(3px)',
                    },
                  }}
                >
                  <Typography sx={{ fontSize: '28px', lineHeight: 1.1, flexShrink: 0 }}>
                    {cert.icon}
                  </Typography>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography sx={{ fontWeight: 700, fontSize: { xs: '13px', md: '15px' }, color: '#0F172A', mb: 0.5 }}>
                      {cert.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                      <Typography sx={{ color: '#64748B', fontSize: '13px' }}>{cert.issuer}</Typography>
                      <Chip
                        label={cert.status}
                        size="small"
                        sx={{ height: '20px', fontSize: '10px', fontWeight: 700, bgcolor: a.bg, color: a.color }}
                      />
                      {cert.note && (
                        <Typography sx={{ color: '#94A3B8', fontSize: '12px', fontStyle: 'italic' }}>
                          {cert.note}
                        </Typography>
                      )}
                    </Box>
                    {cert.status === 'In Progress' && (
                      <Box sx={{ mt: 1.5, height: '4px', borderRadius: '2px', background: '#F1F5F9', overflow: 'hidden' }}>
                        <Box sx={{ height: '100%', width: '60%', borderRadius: '2px', background: `linear-gradient(90deg, ${a.color}, ${a.border})` }} />
                      </Box>
                    )}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

      </Box>
    </SectionWrapper>
  );
};

export default EducationSection;
