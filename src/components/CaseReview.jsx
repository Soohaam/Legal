import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { ArrowLeft } from "lucide-react";

const CaseReview = () => {
  const [caseDetails, setCaseDetails] = useState('');
  const [review, setReview] = useState('');
  const [severity, setSeverity] = useState('');
  const [isMoreInfoRequired, setIsMoreInfoRequired] = useState(false);
  const [showChatbotButton, setShowChatbotButton] = useState(false); // State to control chatbot button visibility
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleInputChange = (e) => {
    setCaseDetails(e.target.value);
    setIsMoreInfoRequired(false); // Reset the more info flag when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await generateReview(caseDetails);
    setShowChatbotButton(true); // Always show the chatbot button after review
  };

  const generateReview = async (details) => {
    let dynamicReview = '';
    let severityLevel = 'Low';

    // Advanced Analysis Methods
    const keywords = {
      'contract': 'Contract law requires a thorough examination of the agreement terms, including offer, acceptance, consideration, and legal capacity.',
      'negligence': 'Negligence cases involve proving duty, breach, causation, and damages. Establishing foreseeability is crucial.',
      'property': 'Property disputes require assessing legal ownership, land use rights, and potential zoning regulations.',
      'criminal': 'Criminal cases require a detailed examination of evidence, intent, and applicable defenses such as alibi or self-defense.',
      'family': 'Family law cases often involve sensitive issues such as divorce, child custody, and alimony. Emotional and financial considerations are key.',
      'employment': 'Employment law cases may involve disputes over wages, discrimination, wrongful termination, and workplace safety.',
    };

    const legalPrinciples = [
      'Evaluate statutory and case law precedents.',
      'Identify key legal arguments and possible counterarguments.',
      'Assess potential risks and legal remedies available.',
      'Consider jurisdictional differences and legal technicalities.',
    ];

    // Severity Analysis
    const severityKeywords = {
      'urgent': 3,
      'emergency': 3,
      'immediate': 3,
      'critical': 3,
      'serious': 2,
      'important': 2,
      'moderate': 1,
      'minor': 1,
    };

    let severityScore = 0;
    for (const [keyword, score] of Object.entries(severityKeywords)) {
      if (details.toLowerCase().includes(keyword)) {
        severityScore += score;
      }
    }

    if (severityScore >= 6) {
      severityLevel = 'High';
    } else if (severityScore >= 3) {
      severityLevel = 'Medium';
    }

    setSeverity(severityLevel);

    // Check if any keyword matches
    let keywordMatch = false;
    for (const [keyword, message] of Object.entries(keywords)) {
      if (details.toLowerCase().includes(keyword)) {
        dynamicReview += `${message} `;
        keywordMatch = true;
      }
    }

    // If no keyword matches and the input is too short, ask for more info
    if (!keywordMatch && details.trim().split(/\s+/).length < 10) {
      setIsMoreInfoRequired(true);
      setReview('Please provide more details about your case to receive a proper review.');
      setSeverity('');
      return;
    }

    // If no keyword matches but input is sufficient, provide a generic review
    if (!keywordMatch) {
      dynamicReview = `The case regarding "${details}" has multiple legal aspects to analyze. 
        ${legalPrinciples.join(' ')} It is advisable to gather all relevant documentation and seek legal expertise.`;
    }

    setReview(dynamicReview);
    setIsMoreInfoRequired(false); // Reset the more info flag if review is generated
  };

  const handleChatbotRedirect = () => {
    navigate('/bot'); // Redirect to the legal chatbot page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 p-6">
      <button
      onClick={() => navigate(-1)}
      className="fixed top-12 left-12 flex items-center px-4 py-2 border-2 border-[#000000] bg-[#2d2f4e] text-white rounded-lg shadow-md hover:bg-[#383861] transition"
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      Go Back
    </button>
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-3xl w-full text-white">
        <h1 className="text-4xl font-bold mb-8 text-center">Case Review</h1>
        <form onSubmit={handleSubmit} className="mb-8">
          <textarea
            value={caseDetails}
            onChange={handleInputChange}
            placeholder="Enter case details here..."
            rows="6"
            required
            className="w-full p-4 rounded-lg border border-gray-600 text-white bg-gray-700 resize-none placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all"
          />
          <button 
            type="submit" 
            className="w-full bg-green-500 text-white px-6 py-3 mt-6 rounded-lg text-lg font-semibold hover:bg-green-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Get Review
          </button>
        </form>

        {(review || isMoreInfoRequired) && (
          <div className="bg-gray-700 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Review:</h2>
            <p className="text-lg leading-relaxed">{review}</p>
            {severity && (
              <>
                <h2 className="text-2xl font-semibold mt-6 mb-2">Severity:</h2>
                <p className="text-lg leading-relaxed">{severity}</p>
              </>
            )}
            {isMoreInfoRequired && (
              <p className="text-lg text-yellow-400 mt-4">More information is required to provide a proper review.</p>
            )}
          </div>
        )}

        {showChatbotButton && (
          <button
            onClick={handleChatbotRedirect}
            className="w-full bg-blue-500 text-white px-6 py-3 mt-8 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Talk to Legal Bot
          </button>
        )}
      </div>
    </div>
  );
};

export default CaseReview;