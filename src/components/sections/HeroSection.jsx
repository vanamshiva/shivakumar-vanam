import { Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { fadeUp, bounce } from '../../utils/animations';
import { scrollTo } from '../../utils/scroll';

const SOCIALS = [
  { icon: <GitHubIcon sx={{ fontSize: '20px' }} />,  href: 'https://github.com/shivakumar-vanam',           title: 'GitHub' },
  { icon: <LinkedInIcon sx={{ fontSize: '20px' }} />, href: 'https://www.linkedin.com/in/shiva-kumar-vanam', title: 'LinkedIn' },
  { icon: <EmailIcon sx={{ fontSize: '20px' }} />,    href: 'mailto:vanamshiva3636@gmail.com',            title: 'Email' },
  { icon: <PhoneIcon sx={{ fontSize: '20px' }} />,    href: 'tel:+91REDACTED',                            title: 'Phone' },
];

const STATS = [
  { value: '3+', label: 'Years Experience' },
  { value: '6+', label: 'Projects Built' },
  { value: '2',  label: 'Companies' },
];

const HeroSection = () => (
  <Box
    id="home"
    sx={{
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      pt: { xs: '88px', md: '96px' },
      pb: { xs: '96px', md: '140px' },
      background: '#060611',
    }}
  >
    {/* Glow orbs */}
    <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <Box sx={{ position: 'absolute', top: '-15%', left: '-10%', width: '65%', height: '65%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 68%)' }} />
      <Box sx={{ position: 'absolute', top: '5%', right: '-8%', width: '50%', height: '50%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 65%)' }} />
      <Box sx={{ position: 'absolute', bottom: '5%', left: '25%', width: '55%', height: '55%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 65%)' }} />
      <Box sx={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
    </Box>

    {/* Content */}
    <Box sx={{ position: 'relative', textAlign: 'center', maxWidth: '860px', px: { xs: 2.5, md: 4 }, width: '100%' }}>

      {/* Role badge */}
      <Box sx={{
        display: 'inline-flex', alignItems: 'center', gap: 1,
        px: 2.25, py: 0.875, mb: 3.5,
        borderRadius: '50px',
        border: '1px solid rgba(99,102,241,0.35)',
        background: 'rgba(99,102,241,0.09)',
        animation: `${fadeUp} 0.8s ease-out both`,
      }}>
        <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#4ADE80', boxShadow: '0 0 10px #4ADE80' }} />
        <Typography sx={{ color: '#A5B4FC', fontSize: { xs: '12px', md: '14px' }, fontWeight: 500 }}>
          Full Stack Developer · MERN | AWS | AI &nbsp;·&nbsp; Open to Opportunities
        </Typography>
      </Box>

      {/* Name */}
      <Typography sx={{
        fontSize: { xs: '40px', sm: '58px', md: '78px' },
        fontWeight: 800,
        letterSpacing: { xs: '-1.5px', md: '-2.5px' },
        lineHeight: 1.04,
        mb: 2.5,
        background: 'linear-gradient(140deg, #FFFFFF 15%, #C7D2FE 55%, #A5B4FC 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: `${fadeUp} 0.8s ease-out 0.15s both`,
      }}>
        Shiva Kumar Vanam
      </Typography>

      {/* Tagline */}
      <Typography sx={{
        fontSize: { xs: '15px', md: '18px' },
        color: '#94A3B8',
        lineHeight: 1.8,
        maxWidth: '640px',
        mx: 'auto',
        mb: 4.5,
        animation: `${fadeUp} 0.8s ease-out 0.3s both`,
      }}>
        Building production-grade MERN systems, AWS microservices &amp; AI-powered automation pipelines —
        3+ years delivering scalable, high-impact software.
      </Typography>

      {/* CTA Buttons */}
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 4, animation: `${fadeUp} 0.8s ease-out 0.45s both` }}>
        <Box
          component="button"
          type="button"
          onClick={() => scrollTo('projects')}
          sx={{
            px: { xs: 3.5, md: 4.5 }, py: { xs: 1.375, md: 1.625 },
            border: 'none', borderRadius: '10px', cursor: 'pointer',
            fontSize: { xs: '14px', md: '15px' }, fontWeight: 600,
            color: '#fff', fontFamily: 'inherit',
            background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
            boxShadow: '0 8px 28px rgba(99,102,241,0.45)',
            transition: 'all 0.22s ease',
            '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 14px 36px rgba(99,102,241,0.55)' },
          }}
        >
          View My Work
        </Box>
        <Box
          component="button"
          type="button"
          onClick={() => scrollTo('contact')}
          sx={{
            px: { xs: 3.5, md: 4.5 }, py: { xs: 1.375, md: 1.625 },
            border: '1px solid rgba(255,255,255,0.16)', borderRadius: '10px',
            cursor: 'pointer', fontSize: { xs: '14px', md: '15px' }, fontWeight: 600,
            color: '#E2E8F0', fontFamily: 'inherit',
            background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(8px)',
            transition: 'all 0.22s ease',
            '&:hover': { background: 'rgba(255,255,255,0.09)', borderColor: 'rgba(255,255,255,0.32)' },
          }}
        >
          Get In Touch
        </Box>
      </Box>

      {/* Social icons */}
      <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', mb: 6, animation: `${fadeUp} 0.8s ease-out 0.6s both` }}>
        {SOCIALS.map(item => (
          <Box
            key={item.title}
            component="a"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            title={item.title}
            sx={{
              width: 46, height: 46, borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.04)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#64748B',
              transition: 'all 0.22s ease',
              '&:hover': {
                background: 'rgba(99,102,241,0.18)',
                borderColor: 'rgba(99,102,241,0.5)',
                color: '#A5B4FC',
                transform: 'translateY(-3px)',
              },
            }}
          >
            {item.icon}
          </Box>
        ))}
      </Box>

      {/* Stats */}
      <Box sx={{ display: 'flex', gap: { xs: 3, md: 8 }, justifyContent: 'center', flexWrap: 'wrap', animation: `${fadeUp} 0.8s ease-out 0.75s both` }}>
        {STATS.map((stat, i) => (
          <Box key={stat.label} sx={{ textAlign: 'center', position: 'relative' }}>
            {i > 0 && (
              <Box sx={{
                position: 'absolute',
                left: { xs: '-16px', md: '-32px' },
                top: '50%', transform: 'translateY(-50%)',
                width: 1, height: 36,
                background: 'rgba(255,255,255,0.1)',
              }} />
            )}
            <Typography sx={{
              fontSize: { xs: '30px', md: '48px' },
              fontWeight: 800, lineHeight: 1,
              background: 'linear-gradient(135deg, #fff 30%, #C7D2FE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {stat.value}
            </Typography>
            <Typography sx={{ fontSize: { xs: '11px', md: '13px' }, color: '#475569', mt: 0.75 }}>
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>

    {/* Scroll indicator */}
    <Box
      onClick={() => scrollTo('about')}
      sx={{
        position: 'absolute',
        bottom: { xs: '28px', md: '40px' },
        left: '50%', transform: 'translateX(-50%)',
        cursor: 'pointer',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5,
        color: '#334155',
        transition: 'color 0.2s',
        animation: `${fadeUp} 1s ease-out 1.2s both`,
        '&:hover': { color: '#6366F1' },
      }}
    >
      <Typography sx={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'inherit' }}>
        Scroll
      </Typography>
      <KeyboardArrowDownIcon sx={{ fontSize: '22px', animation: `${bounce} 1.6s ease-in-out infinite` }} />
    </Box>
  </Box>
);

export default HeroSection;
