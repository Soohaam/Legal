import React from 'react';
import { motion } from 'framer-motion';
import Carousel from 'react-material-ui-carousel';
import ConnectWithUs from "./ConnectWithUs";
import { Chat, Description, UploadFile, HelpOutline, People, Article, PriceCheck } from '@mui/icons-material';

const AnimatedDivider = () => (
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    transition={{ duration: 0.5 }}
    className="h-1 bg-gradient-to-r from-blue-500 to-red-500 my-10"
  />
);

function UserLanding() {
  // Previous code remains the same until the features section

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-y-auto pb-10">
      {/* Previous hero and carousel sections remain unchanged */}
      
      <AnimatedDivider />

      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-400 text-center mb-6">Key Features</h2>
        
        {/* Chatbot Feature - Full Width */}
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="p-8 bg-gray-800 rounded-lg shadow-lg text-center mb-6"
        >
          <Chat className="text-blue-400 text-6xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-blue-400">AI Legal Advisor Chatbot</h3>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Interact with our AI advisor for legal guidance and document generation.
          </p>
          <button 
            onClick={() => window.location.href = 'https://legal-mind-chat-bot.vercel.app/'} 
            className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-lg"
          >
            Explore
          </button>
        </motion.div>

        {/* Other Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features
            .filter(feature => feature.title !== 'AI Legal Advisor Chatbot')
            .map(({ title, Icon, desc, url }) => (
              <motion.div 
                key={title} 
                whileHover={{ scale: 1.05 }} 
                className="p-6 bg-gray-800 rounded-lg shadow-lg text-center"
              >
                <Icon className="text-blue-400 text-4xl mx-auto" />
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-2">{desc}</p>
                <button 
                  onClick={() => window.location.href = url} 
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Explore
                </button>
              </motion.div>
          ))}
        </div>
      </div>

      <AnimatedDivider />

      <ConnectWithUs />

      <footer className="bg-gray-800 py-4 text-center mt-10">
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Update the features array to remove the chatbot since it's handled separately
const features = [
  { title: 'Document Generator', Icon: Description, desc: 'Create legal documents with AI assistance.', url: '/premium-plans' },
  { title: 'Case Review Upload', Icon: UploadFile, desc: 'Upload documents for preliminary AI review.', url: '/case-review' },
  { title: 'Legal FAQ', Icon: HelpOutline, desc: 'Get answers to frequently asked legal questions.', url: '/faq' },
  { title: 'Lawyer Matchmaking', Icon: People, desc: 'Find the right lawyer for your needs.', url: '/lawyer' },
  { title: 'Blog / Legal Insights', Icon: Article, desc: 'Stay updated with recent legal trends.', url: '/Articles' },
  { title: 'Pricing Plans', Icon: PriceCheck, desc: 'View pricing for consultations and services.', url: '/premium-plans' },
];

export default UserLanding;