import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import Slideshow from "../../components/Slideshow";

export default function HomePage() {
  const activities = [
    {
      title: 'Kegiatan 1',
      description: 'Deskripsi kegiatan 1.',
      img: '/images/activity1.jpg'
    },
    {
      title: 'Kegiatan 2',
      description: 'Deskripsi kegiatan 2.',
      img: '/images/activity2.jpg'
    },
    {
      title: 'Kegiatan 3',
      description: 'Deskripsi kegiatan 3.',
      img: '/images/activity3.jpg'
    }
  ];

  return (
    <main>
      <Slideshow />
      <Container className="p-6">
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Selamat Datang di Gua Maria Sancta Rosa Mystica
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Selamat datang di situs penggalangan dana untuk pembangunan dan perluasan area Gua Maria Rosa Mystica.
        </Typography>
        
        {/* Tentang Kami */}
        <Box my={4}>
          <Typography variant="h4" component="h2" gutterBottom>
            Tentang Kami
          </Typography>
          <Typography variant="body1" paragraph>
            Kami adalah komunitas yang berdedikasi untuk menjaga dan mengembangkan Gua Maria Sancta Rosa Mystica. Misi kami adalah untuk menyediakan tempat yang aman dan damai bagi semua orang yang datang untuk berdoa dan mencari kedamaian.
          </Typography>
        </Box>
        
        {/* Aktivitas */}
        <Box my={4}>
          <Typography variant="h4" component="h2" gutterBottom>
            Aktivitas
          </Typography>
          <Grid container spacing={4}>
            {activities.map((activity, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <img src={activity.img} alt={activity.title} style={{ width: '100%', height: 'auto' }} />
                  <CardContent>
                    <Typography variant="h5" component="h3">
                      {activity.title}
                    </Typography>
                    <Typography variant="body1">
                      {activity.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        
        {/* Tombol Donasi */}
        <Box textAlign="center" my={4}>
          <Button variant="contained" color="primary" size="large">
            Donasi Sekarang
          </Button>
        </Box>
      </Container>
    </main>
  );
}
