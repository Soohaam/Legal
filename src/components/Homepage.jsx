import React, { useState } from 'react';
import { Container, Typography, Button, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery, useTheme, Box, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import StarIcon from '@mui/icons-material/Star';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GavelIcon from '@mui/icons-material/Gavel';
import SecurityIcon from '@mui/icons-material/Security';
import GroupIcon from '@mui/icons-material/Group';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Homepage.css';
import Header from './Header';
import Footer from './Footer';

// Custom styled Drawer for better mobile experience
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '80%',
    maxWidth: '280px',
    backgroundColor: '#2d2f4e',
    color: '#ffffff',
    borderRight: 'none',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
  },
}));

function Homepage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { name: 'Quiz', path: '/quiz' },
    { name: 'Features', path: '/user-landing' },
    { name: 'Legal Assistant', path: '/bot' },
    { name: 'Lawyer Login', path: '/login' },
  ];

  const testimonials = [
    {
      text: "The service was outstanding! I received valuable legal advice that helped me navigate my situation seamlessly.",
      author: "— Aarav Patel",
    },
    {
      text: "I can't thank Sujal and Soham enough for their professionalism and expertise. Highly recommended!",
      author: "— Priya Sharma",
    },
  ];

  const testimonialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const NavBar = () => (
    <AppBar position="fixed" sx={{ backgroundColor: '#1a1a1a' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Box
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              flexGrow: 1,
            }}
          >
            <a href="/">
              <img
                src="/leg logo.png"
                alt="Legal AI Logo"
                style={{ height: '40px', width: 'auto' }}
              />
            </a>
          </Box>

          {!isMobile && (
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.path}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );

  const DrawerContent = () => (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 2,
        }}
      >
        <img
          src="/leg logo.png"
          alt="Legal AI Logo"
          style={{ height: '32px', width: 'auto' }}
        />
        <IconButton onClick={toggleDrawer(false)} sx={{ color: '#ffffff' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', mb: 2 }} />

      {/* Navigation Items */}
      <List>
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={toggleDrawer(false)}
                sx={{
                  py: 1.5,
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    fontSize: '1.1rem',
                    fontWeight: 'medium',
                  }}
                />
              </ListItemButton>
            </ListItem>
          </motion.div>
        ))}
      </List>

      {/* Footer */}
      <Box sx={{ mt: 'auto', textAlign: 'center', color: 'rgba(255, 255, 255, 0.7)' }}>
        <small>Legal AI © 2025</small>
      </Box>
    </Box>
  );

  return (
    <>
      <NavBar />
      <StyledDrawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        transitionDuration={{ enter: 300, exit: 200 }}
      >
        <DrawerContent />
      </StyledDrawer>
      <Container maxWidth="lg" className="homepage-container">
        {/* Background Pattern and Icons */}
        <div className="pattern-background" />
        <div className="icon"><AccountBalanceIcon style={{ fontSize: '100px', color: '#3498db' }} /></div>
        <div className="icon"><GavelIcon style={{ fontSize: '100px', color: '#3498db' }} /></div>
        <div className="icon"><SecurityIcon style={{ fontSize: '100px', color: '#3498db' }} /></div>
        <div className="icon"><GroupIcon style={{ fontSize: '100px', color: '#3498db' }} /></div>

        {/* Hero Section */}
        <div className="hero-section" style={{ 
          textAlign: 'center', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '100vh',
          padding: '2rem',
        }}>
          <div className="hero-content" style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '2rem', 
          }}>
            <Typography variant="h1" className="hero-title" gutterBottom style={{ 
              fontWeight: 'bold', 
              color: '#0b5ae3', 
              fontSize: '4rem',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
              WebkitTextStroke: '2px #000',
              textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
            }}>
              Your Trusted Legal AI Advisor
            </Typography>
            <Typography variant="h4" className="hero-subtitle" style={{ 
              color: '#3d4c9c', 
              marginBottom: '3rem', 
              fontSize: '2rem',
              lineHeight: '1.5',
              WebkitTextStroke: '1px #000',
              textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
            }}>
              Empowering You with Intelligent Legal Solutions
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                color="primary"
                component={Link}
                to="/user-landing"
                variant="contained"
                className="cta-button"
                style={{
                  padding: '16px 48px',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  borderRadius: '12px',
                  backgroundColor: '#007FFF',
                  color: '#FFFFFF',
                  textTransform: 'none',
                  boxShadow: '0 4px 6px rgba(0, 127, 255, 0.3)',
                  transition: 'background-color 0.3s ease',
                }}
              >
                Explore Features
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Why Choose Us Section - Dark Theme */}
        <motion.div
          className="choose-us-section"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.5 }}
          style={{ 
            padding: '3rem 1.5rem', 
            textAlign: 'center', 
            backgroundColor: '#1A1A1A',
            color: '#FFFFFF',
          }}
        >
          <div className="choose-us-content" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div variants={fadeInUp}>
              <Typography 
                variant="h4" 
                className="choose-us-title" 
                gutterBottom 
                style={{ 
                  fontWeight: '900',
                  color: '#0b5ae3',
                  fontSize: '2rem',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                }}
              >
                Why Choose Us?
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography 
                variant="body1" 
                className="choose-us-text" 
                style={{ 
                  color: '#E0E0E0',
                  lineHeight: '1.8',
                  fontSize: '1rem',
                  fontWeight: '400',
                }}
              >
                We provide <strong style={{ color: '#007FFF' }}>expert legal guidance</strong> tailored to your needs. Our <strong style={{ color: '#007FFF' }}>AI-driven analysis</strong> leverages the latest technology to deliver precise recommendations.
                <br /><br />
                Enjoy <strong style={{ color: '#007FFF' }}>24/7 support</strong> and have access to our team of seasoned professionals. Our commitment to excellence and customer satisfaction sets us apart.
              </Typography>
            </motion.div>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          className="services-section"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.5 }}
          style={{ padding: '4rem 2rem', textAlign: 'center' }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h4" className="services-title" gutterBottom style={{ 
                fontWeight: '900',
                color: '#0b5ae3',
                fontSize: '2.5rem',
                textTransform: 'uppercase',
              }}>
                Our Services
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="body1" className="services-text" style={{ 
                color: '#2E3A59',
                marginBottom: '2rem',
                fontSize: '1.25rem',
                fontWeight: '500',
              }}>
                We offer a variety of services tailored to meet your legal needs:
              </Typography>
            </motion.div>
            <motion.ul
              className="services-list"
              style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}
              variants={staggerContainer}
            >
              {[
                { name: 'Legal Consultation', route: '/lawyer' },
                { name: 'AI Legal Assistant', route: '/bot' },
                { name: 'Contract Review and Drafting', route: '/case-review' },
                { name: 'Corporate Law Advisory', route: '/lawyer' },
                { name: 'Litigation Support', route: '/lawyer' },
              ].map((service, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    width: '280px',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  <Link to={service.route} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="body1" style={{ 
                      color: '#2E3A59',
                      fontWeight: '600',
                    }}>
                      {service.name}
                    </Typography>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

        {/* Contact Section */}
        <div className="contact-section">
          <Typography variant="h4" className="contact-title">Contact Us</Typography>
          <div className="contact-info">
            <div className="contact-item">
              <PhoneIcon className="contact-icon" />
              <Typography variant="body1">+1 (123) 456-7890</Typography>
            </div>
            <div className="contact-item">
              <EmailIcon className="contact-icon" />
              <Typography variant="body1">info@legalaiadvisor.com</Typography>
            </div>
          </div>
          <Button variant="contained" color="primary" className="cta-button">
            Get in Touch
          </Button>
        </div>

        {/* Footer Section */}
        <footer className="footer">
          <Typography variant="body2">© 2025 Legal AI Advisor. All rights reserved.</Typography>
        </footer>
        <Footer />
      </Container>
    </>
  );
}

export default Homepage;