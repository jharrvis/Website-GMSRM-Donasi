import connectDB from "@/app/lib/mongodb";
import Konfirmasi from "@/app/models/konfirmasi";
import mongoose, { connect } from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { nama, email, telp, bank, rekening, atasnama, nominal, keterangan } =
    await req.json();

  try {
    await connectDB();
    await Konfirmasi.create({
      nama,
      email,
      telp,
      bank,
      rekening,
      atasnama,
      nominal,
      keterangan,
    });

    return NextResponse.json({
      msg: ["Terima kasih, Konfirmasi Pembayaran anda telah diterima"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }

      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({
        msg: ["Tidak dapat menyimpan data konfirmasi."],
      });
    }
  }
}
