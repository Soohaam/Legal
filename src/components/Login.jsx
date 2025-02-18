import React, { useState } from 'react';
import { TextField, Button, Typography, Container, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, EmailOutlined, LockOutlined, VpnKeyOutlined } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Added Link for navigation
import './Login.css'; // Ensure you have this CSS file for custom styles
import { ArrowLeft } from 'lucide-react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [twoFactorCode, setTwoFactorCode] = useState('');
  const [step, setStep] = useState('login'); // 'login' or 'verify'
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/login', { email, password });
      setStep('verify');
    } catch (error) {
      setError('Login failed: ' + (error.response?.data?.msg || error.message));
    }
  };

  const handleVerify = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/verify-2fa', { email, twoFactorCode });
      localStorage.setItem('token', response.data.token);
      navigate('/user-landing');
    } catch (error) {
      setError('2FA verification failed: ' + (error.response?.data?.msg || error.message));
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  

  return (
    <Container maxWidth="sm" className="login-container">
      <button
      onClick={() => navigate(-1)}
      className="fixed top-16 left-12 flex items-center px-4 py-2 border-2 border-[#000000] bg-[#2d2f4e] text-white rounded-lg shadow-md hover:bg-[#383861] transition"
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      Go Back
    </button>
      <div className="floating-background"></div>
      <Typography variant="h4" align="center" gutterBottom className="login-title">
        {step === 'login' ? 'Login' : 'Verify 2FA Code'}
      </Typography>
      <form noValidate autoComplete="off">
        {step === 'login' ? (
          <>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined style={{ color: '#0b5ae3' }} /> {/* Blue icon */}
                  </InputAdornment>
                ),
              }}
              className="login-field"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#0b5ae3' }, // Blue border
                  '&:hover fieldset': { borderColor: '#007FFF' }, // Lighter blue on hover
                },
                '& .MuiInputLabel-root': { color: '#E0E0E0' }, // Light gray label
                '& .MuiInputBase-input': { color: '#FFFFFF' }, // White text
              }}
            />
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined style={{ color: '#0b5ae3' }} /> {/* Blue icon */}
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      style={{ color: '#0b5ae3' }} // Blue icon
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              className="login-field"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#0b5ae3' }, // Blue border
                  '&:hover fieldset': { borderColor: '#007FFF' }, // Lighter blue on hover
                },
                '& .MuiInputLabel-root': { color: '#E0E0E0' }, // Light gray label
                '& .MuiInputBase-input': { color: '#FFFFFF' }, // White text
              }}
            />
            <Button
              variant="contained"
              fullWidth
              onClick={handleLogin}
              className="login-button"
              style={{
                backgroundColor: '#0b5ae3', // Blue button
                color: '#FFFFFF',
                marginTop: '1rem',
                padding: '12px 0',
                fontWeight: '600',
              }}
            >
              Login
            </Button>
          </>
        ) : (
          <>
            <TextField
              label="2FA Code"
              variant="outlined"
              fullWidth
              margin="normal"
              value={twoFactorCode}
              onChange={(e) => setTwoFactorCode(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyOutlined style={{ color: '#0b5ae3' }} /> {/* Blue icon */}
                  </InputAdornment>
                ),
              }}
              className="login-field"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#0b5ae3' }, // Blue border
                  '&:hover fieldset': { borderColor: '#007FFF' }, // Lighter blue on hover
                },
                '& .MuiInputLabel-root': { color: '#E0E0E0' }, // Light gray label
                '& .MuiInputBase-input': { color: '#FFFFFF' }, // White text
              }}
            />
            <Button
              variant="contained"
              fullWidth
              onClick={handleVerify}
              className="login-button"
              style={{
                backgroundColor: '#0b5ae3', // Blue button
                color: '#FFFFFF',
                marginTop: '1rem',
                padding: '12px 0',
                fontWeight: '600',
              }}
            >
              Verify Code
            </Button>
          </>
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <Button
            variant="text"
            onClick={handleForgotPassword}
            style={{ color: '#0b5ae3', textTransform: 'none' }} // Blue text
          >
            Forgot Password?
          </Button>
          <Button
            component={Link}
            to="/register"
            variant="text"
            style={{ color: '#0b5ae3', textTransform: 'none' }} // Blue text
          >
            Register
          </Button>
        </div>
        {error && (
          <Typography color="error" align="center" className="login-error" style={{ marginTop: '1rem' }}>
            {error}
          </Typography>
        )}
      </form>
    </Container>
  );
}

export default Login;