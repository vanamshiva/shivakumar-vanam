import { Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SectionTitle from '../ui/SectionTitle';
import SectionWrapper from '../ui/SectionWrapper';
import ContactCard from '../ui/ContactCard';

const CONTACT_LINKS = [
  {
    icon: <EmailIcon sx={{ fontSize: '18px' }} />,
    meta: 'Email',
    label: 'vanamshiva3636@gmail.com',
    href: 'mailto:vanamshiva3636@gmail.com',
  },
  {
    icon: <LinkedInIcon sx={{ fontSize: '18px' }} />,
    meta: 'LinkedIn',
    label: '/in/shiva-kumar-vanam',
    href: 'https://www.linkedin.com/in/shiva-kumar-vanam',
  },
  {
    icon: <GitHubIcon sx={{ fontSize: '18px' }} />,
    meta: 'GitHub',
    label: '/shivakumar-vanam',
    href: 'https://github.com/shivakumar-vanam',
  },
];

const ContactSection = () => (
  <SectionWrapper id="contact" bg="#F8FAFC">
    <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: 'center' }}>
      <SectionTitle centered>Get In Touch</SectionTitle>
      <Typography sx={{ fontSize: { xs: '15px', md: '17px' }, color: '#475569', maxWidth: '520px', mx: 'auto', mt: -3 }}>
        Have a project in mind or want to collaborate? I&apos;d love to hear from you.
      </Typography>
    </Box>

    <Box sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', lg: '5fr 8fr' },
      gap: { xs: 3, md: 3.5 },
      alignItems: 'start',
    }}>
      {/* Left: dark info panel */}
      <Box sx={{
        background: '#0F172A',
        borderRadius: '24px',
        p: { xs: 3, md: 4 },
        color: '#fff',
        position: { lg: 'sticky' },
        top: { lg: '88px' },
      }}>
        {/* Decorative gradient blob */}
        <Box sx={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '16px',
          mb: 3,
        }}>
          <Box sx={{
            position: 'absolute', top: '-40px', right: '-40px',
            width: '140px', height: '140px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <Typography sx={{ fontWeight: 800, fontSize: { xs: '22px', md: '26px' }, color: '#F8FAFC', lineHeight: 1.2 }}>
            Let&apos;s Work<br />Together
          </Typography>
          <Typography sx={{ fontSize: '14px', color: '#64748B', mt: 1.25, lineHeight: 1.7 }}>
            Open to full-time roles, freelance projects, and interesting collaborations.
          </Typography>
        </Box>

        {/* Contact links */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {CONTACT_LINKS.map(item => (
            <Box
              key={item.meta}
              component="a"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex', alignItems: 'center', gap: 2,
                p: { xs: 1.75, md: 2 },
                borderRadius: '14px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                transition: 'all 0.22s ease',
                '&:hover': {
                  background: 'rgba(99,102,241,0.14)',
                  borderColor: 'rgba(99,102,241,0.35)',
                  transform: 'translateX(4px)',
                },
              }}
            >
              <Box sx={{
                width: 38, height: 38, borderRadius: '10px',
                background: 'rgba(99,102,241,0.15)',
                border: '1px solid rgba(99,102,241,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#A5B4FC', flexShrink: 0,
              }}>
                {item.icon}
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ fontSize: '11px', color: '#475569', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                  {item.meta}
                </Typography>
                <Typography sx={{ fontSize: '13px', color: '#CBD5E1', fontWeight: 500, mt: 0.2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {item.label}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Availability badge */}
        <Box sx={{
          display: 'flex', alignItems: 'center', gap: 1.25, mt: 3, pt: 2.5,
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#4ADE80', boxShadow: '0 0 8px #4ADE80', flexShrink: 0 }} />
          <Typography sx={{ fontSize: '13px', color: '#94A3B8' }}>
            Open to Opportunities · Available Now
          </Typography>
        </Box>
      </Box>

      {/* Right: contact form */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ContactCard />
      </Box>
    </Box>
  </SectionWrapper>
);

export default ContactSection;
