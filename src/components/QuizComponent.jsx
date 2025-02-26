// QuizComponent.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuizComponent = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [coins, setCoins] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showCoinPopup, setShowCoinPopup] = useState(false);
  const navigate = useNavigate();

  // Simpler quiz data for rural audience
  useEffect(() => {
    const fetchQuizData = async () => {
      const data = [
        {
          question: "Can anyone stop you from going to school because of your caste?",
          options: ["Yes", "No"],
          correctAnswer: "No",
          explanation: "The Constitution says everyone has the right to education. No one can stop you because of caste or religion."
        },
        {
          question: "What age can you vote in village elections?",
          options: ["16", "18", "20"],
          correctAnswer: "18",
          explanation: "In India, you can vote when you turn 18, even for village panchayat elections."
        },
        {
          question: "Is it okay to make children under 14 work in fields all day?",
          options: ["Yes", "No"],
          correctAnswer: "No",
          explanation: "The law says children under 14 should go to school, not work full-time."
        },
        {
          question: "If someone cheats you in the market, can you complain to the police?",
          options: ["Yes", "No"],
          correctAnswer: "Yes",
          explanation: "Cheating is wrong under the law. You can tell the police if someone tricks you with money."
        },
        {
          question: "Do women have the right to own land in India?",
          options: ["Yes", "No"],
          correctAnswer: "Yes",
          explanation: "The Constitution gives women the same rights as men to own land or property."
        }
      ];
      setQuizData(data);
      setIsLoading(false);
    };
    fetchQuizData();
  }, []);

  // Handle answer selection
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowExplanation(false);
  };

  // Handle answer submission
  const handleSubmit = () => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setCoins(coins + 10);
      setShowCoinPopup(true);
      setTimeout(() => setShowCoinPopup(false), 1500); // Hide popup after 1.5s
    }
    setShowExplanation(true);
  };

  // Move to next question or show results
  const handleNext = () => {
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowResult(true);
    }
  };

  // Reset quiz
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCoins(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  // Progress calculation
  const progress = quizData.length > 0 ? ((currentQuestion + 1) / quizData.length) * 100 : 0;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <motion.p 
          className="text-blue-400 text-xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading Quiz...
        </motion.p>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-lg shadow-lg max-w-2xl w-full p-6"
        >
          <h2 className="text-3xl font-bold text-blue-500 mb-4 text-center">Quiz Results</h2>
          <div className="space-y-4 text-center">
            <p className="text-xl text-gray-300">
              Score: {score} / {quizData.length}
            </p>
            <p className="text-xl text-yellow-400">
              Coins Earned: {coins} 🪙
            </p>
            <p className="text-lg text-gray-400">
              Percentage: {((score / quizData.length) * 100).toFixed(2)}%
            </p>
            <button
              onClick={resetQuiz}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
            >
              Play Again
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

 

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 relative">
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
        className="max-w-2xl mx-auto"
      >
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-blue-500">Know Your Rights Quiz</h2>
            <p className="text-yellow-400">Coins: {coins} 🪙</p>
          </div>
          
          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
            <motion.div 
              className="bg-blue-500 h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Question {currentQuestion + 1} of {quizData.length}
          </p>

          <h3 className="text-xl font-semibold text-blue-400 mb-4">
            {quizData[currentQuestion].question}
          </h3>

          <div className="space-y-3">
            {quizData[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                  selectedAnswer === option
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                onClick={() => handleAnswerSelect(option)}
                disabled={showExplanation}
                whileHover={{ scale: showExplanation ? 1 : 1.02 }}
                whileTap={{ scale: showExplanation ? 1 : 0.98 }}
              >
                {option}
              </motion.button>
            ))}
          </div>

          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="mt-4 p-4 bg-gray-700 rounded-lg"
            >
              <p className="text-green-400 font-semibold">
                Correct Answer: {quizData[currentQuestion].correctAnswer}
              </p>
              <p className="mt-2 text-gray-300">
                {quizData[currentQuestion].explanation}
              </p>
            </motion.div>
          )}

          <div className="flex justify-between mt-6">
            <button
              onClick={handleSubmit}
              disabled={!selectedAnswer || showExplanation}
              className={`px-6 py-2 rounded-lg text-white transition ${
                !selectedAnswer || showExplanation
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              Submit
            </button>
            {showExplanation && (
              <button
                onClick={handleNext}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition"
              >
                {currentQuestion + 1 === quizData.length ? 'Finish' : 'Next'}
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Correct Answer Popup and Coin Animation */}
      <AnimatePresence>
        {showCoinPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50"
          >
            <p className="text-lg font-semibold">Correct! +10 Coins 🪙</p>
          </motion.div>
        )}
        {showCoinPopup && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 text-yellow-400 text-3xl z-50"
          >
            🪙
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuizComponent;