import React, { useState } from 'react';
import './CaseReview.css';

function CaseReview() {
  const [caseDetails, setCaseDetails] = useState('');
  const [review, setReview] = useState('');

  const handleInputChange = (e) => {
    setCaseDetails(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateReview(caseDetails);
  };

  const generateReview = (details) => {
    // Dynamic review generation logic
    let dynamicReview = '';

    // Simple keyword analysis for more dynamic feedback
    const keywords = {
      'contract': 'Contract law requires a thorough examination of the agreement terms.',
      'negligence': 'Negligence cases often hinge on establishing duty and breach.',
      'property': 'Property disputes typically involve an assessment of ownership rights and land use.',
      'criminal': 'Criminal cases necessitate a careful review of evidence and legal defenses.',
    };

    // Check for keywords in the case details
    for (const [keyword, message] of Object.entries(keywords)) {
      if (details.toLowerCase().includes(keyword)) {
        dynamicReview += `${message} `;
      }
    }

    // If no keywords found, provide a general review
    if (!dynamicReview) {
      dynamicReview = `The case regarding "${details}" has several key aspects to consider. 
        It's essential to gather all relevant facts and consult legal precedents. 
        Consider potential outcomes and the importance of legal counsel.`;
    }

    // Final review text
    setReview(dynamicReview);
  };

  return (
    <div className="case-review-container">
      <h1>Case Review</h1>
      <form onSubmit={handleSubmit} className="case-review-form">
        <textarea
          value={caseDetails}
          onChange={handleInputChange}
          placeholder="Enter case details here..."
          rows="4"
          required
        />
        <button type="submit">Get Review</button>
      </form>
      <div className="review-output">
        <h2>Review:</h2>
        <p>{review}</p>
      </div>
    </div>
  );
}

export default CaseReview;
