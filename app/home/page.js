import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import Slideshow from "../../components/Slideshow";
import ActivityList from "../../components/ActivityList"; // Import komponen ActivityCard
import DonationCTA from "@/components/DonationCTA";

export default function HomePage() {
  return (
    <main>
      <Slideshow />
      <Container className="py-6">
        {/* <div className="bg-white py-5">
          <div className="container p-8 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
            <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
              Welcome
            </div>
            <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl lg:text-slate-800">
              Selamat Datang di Gua Maria Sancta Rosa Mystica
            </h2>
            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl lg:text-slate-600">
              Selamat datang di situs penggalangan dana untuk pembangunan dan
              perluasan area Gua Maria Rosa Mystica.
            </p>
          </div>
        </div> */}

        <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
          <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <img
              className="h-full w-full object-cover"
              src="/images/hero-gmsrm.webp"
              alt="Gua Maria Sancta Rosa Mystica"
            />
          </div>

          <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
            <div className="flex flex-col p-12 md:px-16">
              <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl lg:text-slate-800">
                Selamat Datang di Gua Maria Sancta Rosa Mystica
              </h2>
              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl lg:text-slate-600">
                Selamat datang di situs penggalangan dana untuk pembangunan dan
                perluasan area Gua Maria Rosa Mystica.
              </p>
              <div className="mt-8">
                <Link
                  href="/donasi"
                  className="inline-block w-full text-center text-lg font-bold text-gray-100 bg-blue-500 py-2 px-5 rounded-full hover:bg-blue-600 hover:shadow-md md:w-48"
                >
                  Donasi Sekarang
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tentang Kami */}
        <div className="bg-white py-5">
          <div className="container p-8 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
            <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
              About us
            </div>
            <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl lg:text-slate-800">
              Tentang Kami
            </h2>
            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl lg:text-slate-600">
              Kami adalah komunitas yang berdedikasi untuk menjaga dan
              mengembangkan Gua Maria Sancta Rosa Mystica. Misi kami adalah
              untuk menyediakan tempat yang aman dan damai bagi semua orang yang
              datang untuk berdoa dan mencari kedamaian.
            </p>
          </div>
        </div>

        {/* Aktivitas */}
        <Box
          my={4}
          py={5}
          bgcolor="#EEEEEE"
          sx={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
        >
          <div className="container p-8 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center">
            <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
              Our Activity
            </div>
            <h2 className="max-w-2xl m-3 mb-5 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl lg:text-slate-800">
              Aktivitas
            </h2>
            <ActivityList />
          </div>
        </Box>

        {/* Tombol Donasi */}
        <DonationCTA />
      </Container>
    </main>
  );
}
