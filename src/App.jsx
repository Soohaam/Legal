import React from 'react';
import './app.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Homepage';
import AdminLogin from './components/AdminLogin';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Login from './components/Login';
import Enable2FA from './components/Enable2FA';
import Verify2FA from './components/Verify2FA';
import Register from './components/Register';
import UserLanding from './components/UserLanding';
import AdminLanding from './components/AdminLanding';
import FAQ from './components/FAQ';
import ArticlesPage from './components/ArticlesPage'; // Import the ArticlesPage component
import PremiumPlans from './components/PremiumPlans';
import CaseReview from './components/CaseReview';
import LawyerMatchmaking from './components/LawyerMatchmaking';
import LegalChatbot from './components/LegalChatbot';
import AboutUs from './components/AboutUs';
import Un from './components/Un';
import QuizComponent from './components/QuizComponent';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/setup-2fa" element={<Enable2FA />} />
        <Route path="/verify-2fa" element={<Verify2FA />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/user-landing" element={<UserLanding />} />
        <Route path="/admin-landing" element={<AdminLanding />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/articles" element={<ArticlesPage />} /> {/* Add Articles Page route */}
        <Route path="/premium-plans" element={<PremiumPlans />} /> {/* Corrected this line */}
        <Route path="/case-review" element={<CaseReview />} />
        <Route path="/lawyer" element={<LawyerMatchmaking />} />
        <Route path="/bot" element={<LegalChatbot />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/un" element={<Un />} />
        <Route path="quiz" element={<QuizComponent />} />
      </Routes>
      
    </Router>
  );
}

export default App;
