import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What is a digital legal advisor?",
      answer: "A digital legal advisor is an AI-powered tool that provides legal guidance, helps you understand your rights, and assists with legal documents without the need for a physical lawyer."
    },
    {
      question: "How can a digital legal advisor help rural communities?",
      answer: "It provides easy access to legal information, helps resolve disputes, and educates people about their rights, even in remote areas where lawyers may not be available."
    },
    {
      question: "Is the digital legal advisor free to use?",
      answer: "Yes, our digital legal advisor is free for basic services. However, advanced features may require a subscription."
    },
    {
      question: "What kind of legal issues can the digital advisor handle?",
      answer: "It can assist with family disputes, property rights, labor laws, and basic legal documentation like wills and contracts."
    },
    {
      question: "How accurate is the advice provided by the digital legal advisor?",
      answer: "The advice is based on up-to-date legal information and AI analysis. However, for complex cases, consulting a human lawyer is recommended."
    },
    {
      question: "Can I use the digital legal advisor to file a case in court?",
      answer: "No, the digital legal advisor provides guidance and information but cannot represent you in court. You will need a licensed lawyer for that."
    },
    {
      question: "What should I do if I don't understand the legal terms?",
      answer: "The digital legal advisor explains legal terms in simple language. If you still have doubts, you can contact our support team for help."
    },
    {
      question: "How do I access the digital legal advisor?",
      answer: "You can access it through our website or mobile app. No downloads are required for basic services."
    },
    {
      question: "Is my data safe with the digital legal advisor?",
      answer: "Yes, we use advanced encryption to protect your data and ensure your privacy."
    },
    {
      question: "Can the digital legal advisor help me with land disputes?",
      answer: "Yes, it can provide guidance on land ownership laws and help you understand your rights in land disputes."
    }
  ];

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const navigate = useNavigate();
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
          Frequently Asked Questions (FAQ)
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          Get answers to common questions about our digital legal advisor and learn how it can help you.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div
              className={`bg-gray-800 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${expandedIndex === index ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-blue-500'}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="p-6 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-blue-400">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </div>
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;