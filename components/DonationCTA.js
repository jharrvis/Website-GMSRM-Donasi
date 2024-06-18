// components/DonationCTA.js

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import '../app/globals.css'

const DonationCTA = () => {
  return (
    <Box className="cta-section">
      <Typography variant="h4" component="h2" gutterBottom>
        Dukung Kami
      </Typography>
      <Typography variant="body1" paragraph>
        Kami mengajak Anda untuk ikut berpartisipasi dalam pembangunan dan perluasan area Gua Maria Sancta Rosa Mystica. Dukungan Anda sangat berarti bagi kami untuk menciptakan tempat yang lebih nyaman dan sakral bagi semua umat yang ingin berdoa dan berziarah. Mari berikan sumbangsih Anda dan jadilah bagian dari perubahan ini.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        href="/donasi"
        sx={{
          fontSize: '1rem',
          fontWeight: 'bold',
          padding: '0.75rem 2rem',
          borderRadius: '8px'
        }}
      >
        Donasi Sekarang
      </Button>
    </Box>
  );
};

export default DonationCTA;