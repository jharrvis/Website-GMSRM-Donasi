import React from 'react';
import Link from 'next/link';
import { Box, Container, Typography, Button, Card, CardContent, CardActions, Grid } from '@mui/material';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import Slideshow from "../../components/Slideshow";
import ActivityList from '../../components/ActivityList'; // Import komponen ActivityCard
import DonationCTA from '../../components/DonationCTA';

export default function HomePage() {

  return (
    <main>
      <Slideshow />
      <Container className="py-6">
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Selamat Datang di Gua Maria Sancta Rosa Mystica
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Selamat datang di situs penggalangan dana untuk pembangunan dan perluasan area Gua Maria Rosa Mystica.
        </Typography>
        
        {/* Tentang Kami */}
        <Box my={4}>
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Tentang Kami
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Kami adalah komunitas yang berdedikasi untuk menjaga dan mengembangkan Gua Maria Sancta Rosa Mystica. Misi kami adalah untuk menyediakan tempat yang aman dan damai bagi semua orang yang datang untuk berdoa dan mencari kedamaian.
          </Typography>
        </Box>
        
        {/* Aktivitas */}
        <Box my={4} py={5} bgcolor="#EEEEEE" sx={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
          <Container>
            <Typography variant="h4" component="h2" align="center" gutterBottom>
              Aktivitas
            </Typography>
            <ActivityList />
          </Container>
        </Box>
        
        {/* Tombol Donasi */}
        <DonationCTA />
      </Container>
    </main>
  );
}
