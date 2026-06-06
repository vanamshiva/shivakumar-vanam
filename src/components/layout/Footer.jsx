import { Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { scrollTo } from '../../utils/scroll';

const NAV_LINKS = [
  { l: 'About',     id: 'about' },
  { l: 'Skills',    id: 'skills' },
  { l: 'Projects',  id: 'projects' },
  { l: 'Education', id: 'education' },
  { l: 'Contact',   id: 'contact' },
];

const SOCIALS = [
  { icon: <GitHubIcon sx={{ fontSize: '20px' }} />,  href: 'https://github.com/shivakumar-vanam',           title: 'GitHub' },
  { icon: <LinkedInIcon sx={{ fontSize: '20px' }} />, href: 'https://www.linkedin.com/in/shiva-kumar-vanam', title: 'LinkedIn' },
  { icon: <EmailIcon sx={{ fontSize: '20px' }} />,    href: 'mailto:vanamshiva3636@gmail.com',            title: 'Email' },
];

const Footer = () => (
  <Box sx={{ background: '#060611', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
    <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, md: 4 }, py: { xs: 5, md: 7 } }}>

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: { xs: 'center', md: 'flex-start' },
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 5, md: 4 },
        mb: 5,
      }}>
        {/* Brand */}
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Box sx={{
              width: 40, height: 40, borderRadius: '10px',
              background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, color: '#fff', fontSize: '16px', fontFamily: 'inherit', flexShrink: 0,
            }}>
              SV
            </Box>
            <Typography sx={{ fontWeight: 700, color: '#F8FAFC', fontSize: '17px' }}>
              Shiva Kumar Vanam
            </Typography>
          </Box>
          <Typography sx={{ color: '#475569', fontSize: '14px', maxWidth: '280px' }}>
            Full Stack Developer · MERN | AWS | AI — building production-grade, scalable systems.
          </Typography>
        </Box>

        {/* Nav links */}
        <Box sx={{ display: 'flex', gap: { xs: 3, md: 5 }, flexWrap: 'wrap', justifyContent: 'center' }}>
          {NAV_LINKS.map(link => (
            <Typography
              key={link.id}
              onClick={() => scrollTo(link.id)}
              sx={{ cursor: 'pointer', color: '#64748B', fontSize: '14px', transition: 'color 0.2s', '&:hover': { color: '#A5B4FC' } }}
            >
              {link.l}
            </Typography>
          ))}
        </Box>

        {/* Social icons */}
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          {SOCIALS.map(item => (
            <Box
              key={item.title}
              component="a"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.title}
              sx={{
                width: 40, height: 40, borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.07)',
                background: 'rgba(255,255,255,0.03)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#64748B',
                transition: 'all 0.22s ease',
                '&:hover': {
                  background: 'rgba(99,102,241,0.16)',
                  borderColor: 'rgba(99,102,241,0.4)',
                  color: '#A5B4FC',
                  transform: 'translateY(-3px)',
                },
              }}
            >
              {item.icon}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.06)', pt: 3.5, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
        <Typography sx={{ color: '#334155', fontSize: '13px' }}>
          © {new Date().getFullYear()} Shiva Kumar Vanam. All rights reserved.
        </Typography>
        <Typography sx={{ color: '#1E293B', fontSize: '13px' }}>
          Built with React &amp; Material UI
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default Footer;
