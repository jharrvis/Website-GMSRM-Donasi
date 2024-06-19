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

        <div className="bg-white py-5">
          <div className="container p-8 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
              <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">Welcome</div>
              <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl lg:text-slate-800">Selamat Datang di Gua Maria Sancta Rosa Mystica</h2>
              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl lg:text-slate-600">Selamat datang di situs penggalangan dana untuk pembangunan dan perluasan area Gua Maria Rosa Mystica.</p>
          </div>
        </div>
        
        {/* Tentang Kami */}
        <div className="bg-white py-5">
          <div className="container p-8 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
              <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">About us</div>
              <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl lg:text-slate-800">Tentang Kami</h2>
              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl lg:text-slate-600">Kami adalah komunitas yang berdedikasi untuk menjaga dan mengembangkan Gua Maria Sancta Rosa Mystica. Misi kami adalah untuk menyediakan tempat yang aman dan damai bagi semua orang yang datang untuk berdoa dan mencari kedamaian.</p>
          </div>
        </div>

        {/* Aktivitas */}
        <Box my={4} py={5} bgcolor="#EEEEEE" sx={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
          <div className="container p-8 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center">
              <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">Our Activity</div>
              <h2 className="max-w-2xl m-3 mb-5 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl lg:text-slate-800">Aktivitas</h2>
              <ActivityList />
          </div>
        </Box>
        
        {/* Tombol Donasi */}
        <DonationCTA />
      </Container>
    </main>
  );
}
