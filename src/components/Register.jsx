import React, { useState } from 'react';
import { TextField, Button, Typography, Container, InputAdornment, IconButton, Alert } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Ensure you have this CSS file for custom styles

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
      setMessage('Registration successful! Redirecting to setup 2FA...');
      setError('');
      setTimeout(() => navigate('/setup-2fa'), 2000);
    } catch (error) {
      setError('Registration failed: ' + (error.response?.data?.msg || error.message));
      setMessage('');
    }
  };

  return (
    <Container maxWidth="sm" className="register-container">
      <div className="floating-background"></div>
      <Typography variant="h4" align="center" gutterBottom className="register-title">
        Register
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="register-field"
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
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="register-field"
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
          className="register-field"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#0b5ae3' }, // Blue border
              '&:hover fieldset': { borderColor: '#007FFF' }, // Lighter blue on hover
            },
            '& .MuiInputLabel-root': { color: '#E0E0E0' }, // Light gray label
            '& .MuiInputBase-input': { color: '#FFFFFF' }, // White text
          }}
        />
        {error && (
          <Alert severity="error" className="register-alert" style={{ marginTop: '1rem' }}>
            {error}
          </Alert>
        )}
        {message && (
          <Alert severity="success" className="register-alert" style={{ marginTop: '1rem' }}>
            {message}
          </Alert>
        )}
        <Button
          variant="contained"
          fullWidth
          onClick={handleRegister}
          className="register-button"
          style={{
            backgroundColor: '#0b5ae3', // Blue button
            color: '#FFFFFF',
            marginTop: '1rem',
            padding: '12px 0',
            fontWeight: '600',
          }}
        >
          Register
        </Button>
      </form>
    </Container>
  );
}

export default Register;