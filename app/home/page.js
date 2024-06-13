import React from 'react';
import Link from 'next/link';
import { Box, Container, Typography, Button, Card, CardContent, CardActions, Grid } from '@mui/material';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import Slideshow from "../../components/Slideshow";

export default function HomePage() {
  const activities = [
    {
      title: 'Peresmian Gua Maria Sancta Rosa Mystica di Tuntang, Salatiga',
      description: 'Kamis tanggal 20 Mei 2021 ini akan berlangsung Perayaan Ekaristi dalam rangka upacara pemberkatan dan peresmian patung Bunda Maria Rosa Mistica',
      img: '/images/img-1.webp'
    },
    {
      title: 'Gua Maria Sancta Rosa Mystica menjadi Destinasi Wisata Jawa Tengah',
      description: 'Mari berziarah sembari menenangkan diri di Kecamatan Tuntang, Kabupaten Semarang. Cukup jauh dari keramaian, Gua Maria Rosa Mystica memberi kedamaian tersendiri saat berdoa.',
      img: '/images/img-1.webp'
    },
    {
      title: 'Bupati Semarang Resmikan Gua Maria Tuntang',
      description: 'Bupati Semarang Ngesti Nugraha meresmikan tempat doa bagi umat Katolik di Dusun Banyuurip, Desa Delik, Kecamatan Tuntang, Kabupaten Semarang pada Kamis 20 Mei 2021 malam. Sedangkan pemberkatan patung Maria Santa Rosa Mystica dan tempat doa yang diberi nama Gua Maria Santa Rosa Mystica Tuntang tersebut dilakukan oleh Uskup Agung Semarang Mgr Robertus Rubiyatmoko',
      img: '/images/img-1.webp'
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
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Tentang Kami
          </Typography>
          <Typography variant="body1" align="center" paragraph>
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
                  <CardActions>
                    <Button size="small">Baca Selengkapnya</Button>
                  </CardActions>
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
