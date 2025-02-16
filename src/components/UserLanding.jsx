import React from 'react';
import { motion } from 'framer-motion';
import Carousel from 'react-material-ui-carousel';
import ConnectWithUs from "./ConnectWithUs";
import { Chat, Description, UploadFile, HelpOutline, People, Article, PriceCheck } from '@mui/icons-material';
import Header from './Header';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';

const AnimatedDivider = () => (
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    transition={{ duration: 0.5 }}
    className="h-1 bg-gradient-to-r from-blue-500 to-red-500 my-10"
  />
);

function UserLanding() {
  const navigate = useNavigate();

  // Function to scroll to the Features section
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-y-auto pb-10">
      <Header />
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 bg-gray-50 rounded-lg shadow-md">
          {/* Text Section */}
          <motion.div
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
            className="text-left space-y-6"
          >
            <h2 className="text-4xl font-bold text-blue-600">
              Your Trusted Legal Partner
            </h2>
            <p className="text-lg text-[#000000] leading-relaxed">
              Our AI-powered legal advisor leverages advanced machine learning models to analyze legal documents, offer real-time consultations, and provide personalized legal advice.
            </p>
            <button
              onClick={scrollToFeatures} // Add onClick handler
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Get Started
            </button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ x: '100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.4 }}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src="/scales-wallpaper-preview.jpg"
              alt="Legal Interface"
              className="w-full h-auto rounded-lg transform hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-900/20 rounded-lg"></div>
          </motion.div>
        </div>
      </div>

      <AnimatedDivider />

      <Carousel indicators animation="fade" navButtonsAlwaysVisible>
        {[
          { img: "c1.jpg", title: "Welcome to Your AI Legal Advisor", desc: "Get instant legal advice and document generation at your fingertips." },
          { img: "c2.avif", title: "Simplifying Legal Processes", desc: "Explore our features designed to assist you with your legal needs." }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
            className="relative h-60 flex flex-col justify-center items-center text-center bg-black bg-opacity-50"
          >
            <img src={item.img} alt={item.title} className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" />
            <h2 className="text-3xl font-bold text-blue-400 p-2" style={{ textShadow: '2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white' }}>{item.title}</h2>
            <p className="mt-2 text-lg p-2" style={{ textShadow: '1px 1px 0px gray, -1px -1px 0px gray, 1px -1px 0px gray, -1px 1px 0px gray' }}>{item.desc}</p>
          </motion.div>
        ))}
      </Carousel>

      <AnimatedDivider />

      {/* Features Section with ID */}
      <div id="features-section" className="container mx-auto px-6">
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
            onClick={() => navigate("/bot")}
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
        <p>© 2025 Your Company. All rights reserved.</p>
      </footer>
      <Footer />
    </div>
  );
}

// Update the features array to remove the chatbot since it's handled separately
const features = [
  { title: 'Case Review Upload', Icon: UploadFile, desc: 'Upload documents for preliminary AI review.', url: '/case-review' },
  { title: 'Legal FAQ', Icon: HelpOutline, desc: 'Get answers to frequently asked legal questions.', url: '/faq' },
  { title: 'Lawyer Matchmaking', Icon: People, desc: 'Find the right lawyer for your needs.', url: '/lawyer' },
  { title: 'Blog / Legal Insights', Icon: Article, desc: 'Stay updated with recent legal trends.', url: '/Articles' },
  { title: 'Document Generator', Icon: Description, desc: 'Create legal documents with AI assistance.', url: '/premium-plans' },
  { title: 'Pricing Plans', Icon: PriceCheck, desc: 'View pricing for consultations and services.', url: '/premium-plans' },
];

export default UserLanding;