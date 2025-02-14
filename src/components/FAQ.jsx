import React from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Ensure you have this import for the expand icon
import { motion } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    {
      question: "What is a legal advisor?",
      answer: "A legal advisor is a professional who provides guidance on legal matters and helps clients understand their rights and obligations."
    },
    {
      question: "How can I find the right lawyer?",
      answer: "You can find a lawyer by researching local law firms, asking for referrals from friends or family, or using online legal services."
    },
    {
      question: "What should I prepare for a legal consultation?",
      answer: "Before your consultation, gather any relevant documents, notes on your situation, and a list of questions you want to ask."
    },
    {
      question: "Are legal consultations confidential?",
      answer: "Yes, legal consultations are generally confidential, meaning that what you discuss with your lawyer is protected by attorney-client privilege."
    },
    {
      question: "What is the difference between a lawyer and a legal consultant?",
      answer: "A lawyer is a licensed professional who can represent you in legal matters, while a legal consultant provides advice but may not represent you in court."
    },
    {
      question: "How much does legal advice cost?",
      answer: "The cost of legal advice varies based on the complexity of your issue and the lawyer's fees. Some lawyers charge hourly rates, while others may offer flat fees for specific services."
    },
    {
      question: "What should I do if I can't afford a lawyer?",
      answer: "If you can't afford a lawyer, consider seeking legal aid services, which may offer free or low-cost assistance based on your income."
    },
    {
      question: "How long does it take to resolve a legal issue?",
      answer: "The time it takes to resolve a legal issue depends on the complexity of the case and the court's schedule. Some issues can be resolved quickly, while others may take months or even years."
    }
  ];

  return (
    <Container maxWidth="md" style={styles.container}>
      <Typography variant="h4" gutterBottom style={styles.title}>
        Frequently Asked Questions (FAQ)
      </Typography>
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Accordion style={styles.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
              <Typography variant="h6" style={styles.question}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" style={styles.answer}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </motion.div>
      ))}
    </Container>
  );
};

const styles = {
  container: {
    marginTop: '50px',
    background: 'rgba(255, 255, 255, 0.1)', // Slightly transparent background
    borderRadius: '15px',
    padding: '20px',
    color: '#00bcd4', // Main theme color
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#00bcd4', // Main theme color
    textAlign: 'center',
  },
  accordion: {
    margin: '15px 0', // Space between each FAQ item
    background: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background for accordion
    borderRadius: '10px',
  },
  question: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333', // Darker text for questions
  },
  answer: {
    fontSize: '1rem',
    color: '#00bcd4', // Softer color for answers
  },
};

export default FAQ;
