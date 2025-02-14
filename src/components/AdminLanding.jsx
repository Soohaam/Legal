import React from 'react';
import { Typography, Container, Paper, Grid, Button } from '@mui/material';
import { People, Report, Settings } from '@mui/icons-material';
import './AdminLanding.css'; 

function AdminLanding() {
  return (
    <Container maxWidth="lg" style={{ marginTop: '50px' }}>
      <style>
        {`
          body {
              background: linear-gradient(to right, #1a1a1a, #333333); /* Dark gradient background */
              color: white; /* Text color */
              font-family: 'Roboto', sans-serif; /* Font family */
              min-height: 100vh; /* Full height */
              overflow-y: auto; /* Allow vertical scrolling */
              padding-bottom: 20px; /* Padding to prevent overflow */
              margin: 0; /* Remove default margin */
          }

          .admin-landing-title {
              color: #00bcd4; /* Title color matching theme */
              margin-bottom: 30px;
              text-align: center;
              font-size: 3rem; /* Increased font size for title */
              background-color: rgba(0, 188, 212, 0.2); /* Light background color for highlight */
              padding: 10px; /* Padding around the title */
              border-radius: 10px; /* Rounded corners for the highlight */
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); /* Slight shadow for depth */
          }

          .section-title {
              color: #ffffff; /* White text color for section titles */
              margin: 20px 0; /* Space above and below */
              text-align: center; /* Center the text */
              font-size: 2rem; /* Font size for section titles */
              background-color: rgba(0, 188, 212, 0.3); /* Light background color for section titles */
              padding: 10px; /* Padding around section titles */
              border-radius: 10px; /* Rounded corners for section titles */
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); /* Slight shadow for depth */
          }

          .admin-landing-paper {
              background: rgba(255, 255, 255, 0.1); /* Transparent background */
              border-radius: 15px; /* Rounded corners */
              padding: 20px; /* Spacing inside paper */
              color: hsl(0, 0%, 100%); /* Text color */
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Shadow effect */
              transition: transform 0.3s, box-shadow 0.3s; /* Smooth scaling */
          }

          .admin-landing-paper:hover {
              transform: translateY(-5px); /* Lift effect on hover */
              box-shadow: 0 8px 30px rgba(0, 0, 0, 0.7); /* Enhanced shadow on hover */
          }

          .admin-landing-icon {
              display: flex; /* Center icons */
              justify-content: center; /* Center horizontally */
              margin-bottom: 20px; /* Spacing below icons */
              color: #00bcd4; /* Icon color matching theme */
              font-size: 50px; /* Icon size */
          }

          .admin-landing-description {
              margin: 10px 0 20px; /* Spacing above and below */
              font-size: 1.5rem; /* Increased font size for better readability */
              color: #ffffff; /* White text color */
          }

          .cta-button {
              margin-right: 10px; /* Space between buttons */
              background-color: #00bcd4; /* Button color */
              color: white; /* Button text color */
              padding: 10px 20px; /* Button padding */
              border-radius: 25px; /* More rounded corners */
              transition: background-color 0.3s ease, transform 0.3s; /* Hover effect */
          }

          .cta-button:hover {
              background-color: #0097a7; /* Darker shade on hover */
              transform: translateY(-2px); /* Lift effect on hover */
          }

          .cta-button.outlined {
              background: transparent; /* Transparent background for outlined buttons */
              border: 2px solid #00bcd4; /* Border color */
              color: #00bcd4; /* Text color */
          }

          .cta-button.outlined:hover {
              background-color: rgba(0, 188, 212, 0.1); /* Light background on hover */
          }
        `}
      </style>

      <Typography variant="h3" gutterBottom align="center" className="admin-landing-title">
        Welcome, Admin!
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className="admin-landing-paper">
            <div className="admin-landing-icon">
              <People fontSize="large" />
            </div>
            <Typography variant="h5" className="section-title">User Management</Typography>
            <Typography variant="body1" className="admin-landing-description">
              Manage and oversee all user accounts, including creating new accounts, editing existing ones, and deleting users.
            </Typography>
            <Button variant="contained" className="cta-button">
              View All Users
            </Button>
            <Button variant="outlined" className="cta-button">
              Add New User
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className="admin-landing-paper">
            <div className="admin-landing-icon">
              <Report fontSize="large" />
            </div>
            <Typography variant="h5" className="section-title">Reports</Typography>
            <Typography variant="body1" className="admin-landing-description">
              Access and analyze system reports, view activity logs, and generate detailed reports for administrative review.
            </Typography>
            <Button variant="contained" className="cta-button">
              View Reports
            </Button>
            <Button variant="outlined" className="cta-button">
              Generate New Report
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className="admin-landing-paper">
            <div className="admin-landing-icon">
              <Settings fontSize="large" />
            </div>
            <Typography variant="h5" className="section-title">Administrative Tasks</Typography>
            <Typography variant="body1" className="admin-landing-description">
              Perform system configurations, manage user roles and permissions, and adjust system settings to optimize performance.
            </Typography>
            <Button variant="contained" className="cta-button">
              Manage Roles
            </Button>
            <Button variant="outlined" className="cta-button">
              System Settings
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AdminLanding;
