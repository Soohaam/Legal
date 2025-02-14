import React from 'react';
import './PremiumPlans.css'; // Ensure this path is correct

const PremiumPlans = () => {
  return (
    <div className="premium-plans">
      <h1>Unlock Premium Features</h1>

      <div className="plans-container"> {/* Main container for both columns */}
        <div className="left-column"> {/* Left column for monthly plans */}
          <h2>Monthly Plans</h2>
          <div className="plan">
            <h3>Basic Plan</h3>
            <p>₹99 per month</p>
            <button>Choose Basic</button>
          </div>

          <div className="plan">
            <h3>Pro Plan</h3>
            <p>₹199 per month</p>
            <button>Choose Pro</button>
          </div>

          <div className="plan">
            <h3>Premium Plan</h3>
            <p>₹299 per month</p>
            <button>Choose Premium</button>
          </div>
        </div>

        <div className="right-column"> {/* Right column for yearly plans */}
          <h2>Yearly Plans</h2>
          <div className="plan">
            <h3>Basic Yearly Plan</h3>
            <p>₹999 per year</p>
            <button>Choose Basic Yearly</button>
          </div>

          <div className="plan">
            <h3>Pro Yearly Plan</h3>
            <p>₹1,999 per year</p>
            <button>Choose Pro Yearly</button>
          </div>

          <div className="plan">
            <h3>Premium Yearly Plan</h3>
            <p>₹3,499 per year</p>
            <button>Choose Premium Yearly</button>
          </div>
        </div>
      </div>

      <p className="note">
        *All plans are auto-renewed monthly. Cancel anytime.
      </p>
    </div>
  );
};

export default PremiumPlans;
