import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Un = () => {
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-16 left-12 flex items-center px-4 py-2 border-2 border-[#000000] bg-[#2d2f4e] text-white rounded-lg shadow-md hover:bg-[#383861] transition"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Go Back
      </button>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-blue-500 mb-4">
          Coming Soon: A Potential Feature!
        </h2>
        <p className="text-lg text-gray-400 mb-6">
          While it's not implemented yet, we're exploring ways to bring it to life in the future.
        </p>
        

        {/* Illustration or Icon (Optional) */}
        <div className="flex justify-center mb-12">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4207/4207253.png" // Replace with your own illustration or icon
            alt="Potential Feature"
            className="w-48 h-48"
          />
        </div>

        {/* Call to Action (Optional) */}
        <button
          onClick={() => navigate("/user-landing")}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Explore other Freaures
        </button>
      </motion.div>
    </div>
  );
};

export default Un;