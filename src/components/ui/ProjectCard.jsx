import { Box, Chip, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { cssStyles } from '../../constants/CssStyles';

const ProjectCard = ({ project }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const accent = project.accent || '#6366F1';

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      borderRadius: '18px',
      overflow: 'hidden',
      background: '#fff',
      border: '1px solid #E8ECF4',
      boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: `0 24px 48px ${accent}22`,
        borderColor: `${accent}44`,
      },
    }}>
      {/* Accent top stripe */}
      <Box sx={{ height: '4px', background: `linear-gradient(90deg, ${accent}, ${accent}99)`, flexShrink: 0 }} />

      <Box sx={{ p: { xs: 2.5, md: 3 }, display: 'flex', flexDirection: 'column', flex: 1, gap: 2 }}>

        {/* Highlight badge */}
        {project.highlight && (
          <Box sx={{
            display: 'inline-flex', alignSelf: 'flex-start',
            px: 1.5, py: 0.5, borderRadius: '50px',
            background: `${accent}16`, border: `1px solid ${accent}40`,
          }}>
            <Typography sx={{ fontSize: '11px', fontWeight: 700, color: accent }}>
              {project.highlight}
            </Typography>
          </Box>
        )}

        {/* Logo + title */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.75 }}>
          {project.logo && (
            <Box sx={{
              width: isMobile ? 44 : 52, height: isMobile ? 44 : 52,
              borderRadius: '12px',
              background: `${accent}12`, border: `1px solid ${accent}28`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <img
                src={project.logo}
                alt={project.title}
                style={{ width: '68%', height: '68%', objectFit: 'contain' }}
              />
            </Box>
          )}
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: { xs: '15px', md: '17px' }, color: '#0F172A', lineHeight: 1.3 }}>
              {project.title}
            </Typography>
            <Typography sx={{ fontSize: '12px', color: accent, fontWeight: 600, mt: 0.4 }}>
              {project.role}
            </Typography>
          </Box>
        </Box>

        {/* About */}
        <Typography sx={{ fontSize: { xs: '13px', md: '14px' }, color: '#475569', lineHeight: 1.7 }}>
          {project.about}
        </Typography>

        {/* Tech chips */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
          {project.technologies?.map((tech, idx) => (
            <Chip
              key={idx}
              label={tech.name}
              size="small"
              sx={{
                height: '22px', fontSize: '11px', fontWeight: 600,
                bgcolor: cssStyles.chips[tech.styleKey]?.backgroundColor || '#F1F5F9',
                border: `1px solid ${cssStyles.chips[tech.styleKey]?.border || '#E2E8F0'}`,
                color: '#1E293B',
              }}
            />
          ))}
        </Box>

        {/* Responsibilities */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.85, flex: 1 }}>
          {project.responsibilities?.map((item, idx) => (
            <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
              <Box sx={{ width: 5, height: 5, borderRadius: '50%', background: accent, mt: '7px', flexShrink: 0 }} />
              <Typography sx={{ fontSize: { xs: '12px', md: '13px' }, color: '#475569', lineHeight: 1.6 }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Footer */}
        <Box sx={{ pt: 2, mt: 'auto', borderTop: '1px solid #F1F5F9' }}>
          <Typography sx={{ fontSize: '12px', color: '#94A3B8', fontWeight: 500 }}>
            {project.duration} · {project.company}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
