// const { Schema, default: mongoose } = require("mongoose");
import mongoose, { Schema } from "mongoose";

const konfirmasiSchema = new Schema({
  nama: {
    type: String,
    required: [true, "Nama harus di isi"],
    trim: true,
    minLength: [2, "Panjanga Nama minimal 2 karakter"],
    maxLength: [50, "Panjang Nama tidak lebih dari 50 Karakter"],
  },
  email: {
    type: String,
    required: [true, "Alamat email harus di isi."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },
  telp: {
    type: String,
    required: [true, "Nomor telepon harus di isi."],
  },
  bank: {
    type: String,
    required: [true, "Nama Bank harus di isi."],
  },
  rekening: {
    type: String,
    required: [true, "Nomor Rekening harus di isi."],
  },
  atasnama: {
    type: String,
    required: [true, "Nama Pemilik Rekening harus di isi."],
    trim: true,
    minLength: [2, "Panjanga Nama Pemilik Rekening minimal 2 karakter"],
    maxLength: [
      50,
      "Panjang Nama Pemilik Rekening tidak lebih dari 50 Karakter",
    ],
  },
  nominal: {
    type: Number,
    required: [true, "Jumlah Nominal Transfer harus di isi."],
    min: 0,
  },
  keterangan: {
    type: String,
    maxLength: [300, "Panjang keterangan tidak lebih dari 300 Karakter"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Konfirmasi =
  mongoose.models.Konfirmasi || mongoose.model("Konfirmasi", konfirmasiSchema);

export default Konfirmasi;
