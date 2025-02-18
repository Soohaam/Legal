import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleCardClick = (index) => {
    setClickedIndex(index);
    setTimeout(() => {
      setClickedIndex(null);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate(-1)}
        className="fixed top-16 left-12 flex items-center px-4 py-2 border-2 border-[#000000] bg-[#2d2f4e] text-white rounded-lg shadow-md hover:bg-[#383861] transition"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Go Back
      </button>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-blue-500 mb-4">
          Articles
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          Explore the latest articles on AI and the legal landscape.
        </p>
      </motion.div>

      <Container maxWidth="lg" style={styles.container}>
        <Grid container spacing={4}>
          {articlesData.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
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
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px 30px',
    marginTop: '40px',
    background: '#424242',
    borderRadius: '20px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    transition: 'background 0.3s ease',
    maxWidth: '1200px',
    margin: '40px auto',
  },
  header: {
    marginBottom: '40px',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '2.8rem',
    color: '#ffffff',
    lineHeight: '1.3',
    '@media (max-width: 768px)': {
      fontSize: '2.2rem',
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
    width: '99%',
    margin: '0 auto',
    '&:hover': {
      animation: 'wobble 0.6s ease-in-out',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
      backgroundColor: '#757575',
    },
    '@media (max-width: 768px)': {
      padding: '25px',
      width: '100%',
    },
  },
  clickedCard: {
    transform: 'scale(0.97)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.25)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  articleTitle: {
    marginBottom: '20px',
    fontSize: '1.4rem',
    color: '#e0e0e0',
    transition: 'transform 0.3s ease, color 0.3s ease',
    animation: 'motion 2s infinite',
    '@media (max-width: 768px)': {
      fontSize: '1.3rem',
    },
  },
  button: {
    backgroundColor: '#0288d1',
    color: '#ffffff',
    padding: '12px 24px',
    borderRadius: '30px',
    transition: 'all 0.3s ease',
    fontWeight: 'bold',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: '#01579b',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    },
    '@media (max-width: 768px)': {
      padding: '10px 18px',
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