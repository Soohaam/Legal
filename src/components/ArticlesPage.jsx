import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import './ArticlesPage.css'; // Import the CSS file

const articlesData = [
  {
    title: 'Top five AI legal assistants to optimise your firms in 2024',
    link: 'https://indiaai.gov.in/article/top-five-ai-legal-assistants-to-optimise-your-firms-in-2024',
  },
  {
    title: 'Can AI amend the face of the Indian Legal System?',
    link: 'https://indiaai.gov.in/article/can-ai-amend-the-face-of-the-indian-legal-system',
  },
  {
    title: 'Isn’t the liability of AI-induced medical devices a legal requirement?',
    link: 'https://indiaai.gov.in/article/isn-t-the-liability-of-ai-induced-medical-devices-a-legal-requirement',
  },
  {
    title: 'How AI is Transforming Legal Research in Agriculture Sector',
    link: 'https://link.springer.com/article/10.1007/s00146-022-01421-2',
  },
  {
    title: 'AI And The Legal Landscape: Embracing Innovation, Addressing Challenges',
    link: 'https://www.livelaw.in/lawschool/articles/law-and-ai-ai-powered-tools-general-data-protection-regulation-250673',
  },
];

const ArticlesPage = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleCardClick = (index) => {
    setClickedIndex(index);
    setTimeout(() => {
      setClickedIndex(null);
    }, 300);
  };

  return (
    <Container maxWidth="lg" style={styles.container}>
      <Typography variant="h4" gutterBottom style={styles.header}>
        Articles
      </Typography>
      <Grid container spacing={4}>
        {articlesData.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              style={{
                ...styles.articleCard,
                ...(clickedIndex === index && styles.clickedCard),
              }}
              onClick={() => handleCardClick(index)}
            >
              <Typography variant="h6" style={styles.articleTitle}>
                {article.title}
              </Typography>
              <Button
                variant="contained"
                style={styles.button}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(article.link, '_blank');
                }}
              >
                Read More
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const styles = {
  container: {
    padding: '50px 30px', // Increased top/bottom padding for more spacious layout
    marginTop: '40px',
    background: '#424242',
    borderRadius: '20px', // Increased radius for a smoother look
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)', // Slightly stronger shadow
    transition: 'background 0.3s ease',
    maxWidth: '1200px', // Adjusted max-width for a slightly narrower look
    margin: '40px auto',
  },
  header: {
    marginBottom: '40px', // Increased margin for better spacing below the header
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '2.8rem', // Slightly larger font for a more prominent header
    color: '#ffffff',
    lineHeight: '1.3',
    '@media (max-width: 768px)': {
      fontSize: '2.2rem', // Adjusted font size for smaller screens
    },
  },
  articleCard: {
    padding: '30px',
    textAlign: 'center',
    borderRadius: '15px',
    background: '#616161',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    width: '99%', // Adjusted width for the card
    margin: '0 auto', // Center the card
    '&:hover': {
      animation: 'wobble 0.6s ease-in-out',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
      backgroundColor: '#757575',
    },
    '@media (max-width: 768px)': {
      padding: '25px',
      width: '100%', // Ensure full width on smaller screens
    },
  },
  clickedCard: {
    transform: 'scale(0.97)', // Subtle scale effect on click
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.25)', // Stronger shadow on click
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  articleTitle: {
    marginBottom: '20px', // More spacing between the title and button
    fontSize: '1.4rem', // Slightly larger title text
    color: '#e0e0e0',
    transition: 'transform 0.3s ease, color 0.3s ease',
    animation: 'motion 2s infinite', // Keep the motion effect
    '@media (max-width: 768px)': {
      fontSize: '1.3rem', // Adjusted font size for mobile
    },
  },
  button: {
    backgroundColor: '#0288d1',
    color: '#ffffff',
    padding: '12px 24px', // Larger padding for a more comfortable button size
    borderRadius: '30px', // More rounded corners
    transition: 'all 0.3s ease',
    fontWeight: 'bold',
    fontSize: '1rem', // Slightly larger button text
    '&:hover': {
      backgroundColor: '#01579b',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)', // Subtle hover shadow
    },
    '@media (max-width: 768px)': {
      padding: '10px 18px', // Adjusted padding for mobile
      fontSize: '0.9rem',
    },
  },
  '@keyframes motion': {
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
    '100%': { transform: 'translateY(0)' },
  },
  '@keyframes wobble': {
    '0%': { transform: 'translateX(0)' },
    '15%': { transform: 'translateX(-10px) rotate(-3deg)' },
    '30%': { transform: 'translateX(10px) rotate(3deg)' },
    '45%': { transform: 'translateX(-10px) rotate(-3deg)' },
    '60%': { transform: 'translateX(10px) rotate(3deg)' },
    '75%': { transform: 'translateX(-5px) rotate(-1.5deg)' },
    '100%': { transform: 'translateX(0)' },
  },
};


export default ArticlesPage;
