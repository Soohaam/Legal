import React from 'react';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

const ConnectWithUs = () => {
  const platforms = [
    {
      name: 'WhatsApp',
      description: 'Chat with us for instant support and queries.',
      icon: <WhatsAppIcon style={{ fontSize: '40px', color: '#25D366' }} />, // WhatsApp Green
    },
    {
      name: 'Instagram',
      description: 'Follow us for the latest updates and stories.',
      icon: <InstagramIcon style={{ fontSize: '40px', color: '#E1306C' }} />, // Instagram Color
    },
    {
      name: 'Telegram',
      description: 'Join our channel for news and announcements.',
      icon: <TelegramIcon style={{ fontSize: '40px', color: '#0088CC' }} />, // Telegram Blue
    },
  ];

  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Connect With Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        Stay connected with us through your favorite platforms:
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {platforms.map((platform) => (
          <Grid item xs={12} sm={4} key={platform.name}>
            <Box 
              border={1} 
              borderRadius="8px" 
              padding="20px" 
              textAlign="center" 
              style={{ 
                borderColor: '#ccc', 
                background: '#333', // Dark Grey Background
                color: 'white' // White text for better readability on dark background
              }}
            >
              <Box>{platform.icon}</Box>
              <Typography variant="h6" style={{ fontWeight: 'bold', color: 'black' }}>
                {platform.name}
              </Typography>
              <Typography variant="body2" style={{ fontWeight: 'bold', color: 'black' }}>
                {platform.description}
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                Connect
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ConnectWithUs;
