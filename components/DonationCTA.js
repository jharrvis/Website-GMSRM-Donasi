// components/DonationCTA.js

import React from 'react';
import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material';
import '../app/globals.css'

const DonationCTA = () => {
  return (
    <div>
        <div className="container p-8 mx-auto xl:px-0">
            <div className="relative flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto overflow-hidden text-white bg-indigo-600 bg-gradient-to-r from-indigo-600 to-indigo-700 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
                <div className="absolute w-24 h-24 bg-white rounded-full bg-gradient-to-b from-white to-indigo-600 opacity-20 -z-1 left-3 bottom-3"></div>
                <div className="absolute w-24 h-24 bg-white rounded-full bg-gradient-to-b from-white to-indigo-600 opacity-20 -z-1 left-1/2 -top-10"></div>
                <div className="relative z-0 flex-grow text-center lg:text-left">
                    <h2 className="text-3xl font-medium lg:text-3xl">Dukung Kami</h2>
                    <p className="mt-2 text-white text-opacity-80 lg:text-xl">Dukungan Anda sangat berarti bagi kami.</p>
                </div>
                <div className="relative flex-shrink-0 w-full text-center lg:w-auto">
                    <Link href="/donasi" className="inline-block py-3 mx-auto font-medium text-center text-indigo-600 bg-white rounded-md sm:text-lg px-7 lg:px-10 lg:py-5">
                      Donasi Sekarang
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default DonationCTA;