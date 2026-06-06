import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NAV_LINKS = [
  { label: 'About',      id: 'about' },
  { label: 'Skills',     id: 'skills' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Education',  id: 'education' },
  { label: 'Contact',    id: 'contact' },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    scrollTo(id);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.07)' : 'none',
          transition: 'background 0.3s ease, border-bottom 0.3s ease',
          boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <Toolbar disableGutters sx={{ px: 0 }}>
          <Box sx={{
            maxWidth: '1200px',
            width: '100%',
            mx: 'auto',
            px: { xs: 2, md: 4 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
          }}>
            {/* Logo */}
            <Box
              onClick={() => scrollTo('home')}
              sx={{ display: 'flex', alignItems: 'center', gap: 1.5, cursor: 'pointer', userSelect: 'none' }}
            >
              <Box sx={{
                width: 36,
                height: 36,
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                color: '#fff',
                fontSize: '15px',
                fontFamily: 'inherit',
                flexShrink: 0,
              }}>
                SV
              </Box>
              <Typography sx={{
                fontWeight: 700,
                fontSize: '15px',
                color: scrolled ? '#0F172A' : '#fff',
                transition: 'color 0.3s',
                display: { xs: 'none', sm: 'block' },
              }}>
                Shiva Kumar Vanam
              </Typography>
            </Box>

            {/* Desktop nav links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {NAV_LINKS.map(link => (
                <Box
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  sx={{
                    px: 1.75,
                    py: 0.875,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: scrolled ? '#475569' : 'rgba(255,255,255,0.8)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: scrolled ? '#6366F1' : '#fff',
                      background: scrolled ? 'rgba(99,102,241,0.07)' : 'rgba(255,255,255,0.08)',
                    },
                  }}
                >
                  {link.label}
                </Box>
              ))}
              <Box
                onClick={() => handleNav('contact')}
                sx={{
                  ml: 1,
                  px: 2.5,
                  py: 0.875,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#fff',
                  background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                  transition: 'opacity 0.2s, transform 0.2s',
                  '&:hover': { opacity: 0.88, transform: 'translateY(-1px)' },
                }}
              >
                Hire Me
              </Box>
            </Box>

            {/* Mobile hamburger */}
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{
                display: { md: 'none' },
                color: scrolled ? '#374151' : '#fff',
                p: 1,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 272, background: '#0F172A', borderLeft: '1px solid rgba(255,255,255,0.08)' } }}
      >
        <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{
                width: 32,
                height: 32,
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                color: '#fff',
                fontSize: '13px',
                fontFamily: 'inherit',
              }}>
                SV
              </Box>
              <Typography sx={{ fontWeight: 700, color: '#F8FAFC', fontSize: '15px' }}>Menu</Typography>
            </Box>
            <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#64748B', p: 0.5 }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, flex: 1 }}>
            {NAV_LINKS.map(link => (
              <Box
                key={link.id}
                onClick={() => handleNav(link.id)}
                sx={{
                  px: 2,
                  py: 1.5,
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#94A3B8',
                  transition: 'all 0.2s',
                  '&:hover': { background: 'rgba(99,102,241,0.12)', color: '#A5B4FC' },
                }}
              >
                {link.label}
              </Box>
            ))}
          </Box>

          <Box
            onClick={() => handleNav('contact')}
            sx={{
              mt: 4,
              px: 2,
              py: 1.5,
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: 600,
              color: '#fff',
              background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
              textAlign: 'center',
              '&:hover': { opacity: 0.88 },
            }}
          >
            Hire Me
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
