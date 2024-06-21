"use client";

import { useState } from "react";

export default function ConfirmationForm() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [telp, setTelp] = useState("");
  const [bank, setBank] = useState("");
  const [rekening, setRekening] = useState("");
  const [atasnama, setAtasnama] = useState("");
  const [nominal, setNominal] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Fullname: ", nama);
    console.log("Email: ", email);
    console.log("Tel: ", telp);
    console.log("Bank: ", bank);
    console.log("Rekening: ", rekening);
    console.log("Atasnama: ", atasnama);
    console.log("Nominal: ", nominal);
    console.log("Keterangan: ", keterangan);

    const res = await fetch("api/konfirmasi", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nama,
        email,
        telp,
        bank,
        rekening,
        atasnama,
        nominal,
        keterangan,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    console.log(error);
    setSuccess(success);

    if (success) {
      setNama("");
      setEmail("");
      setTelp("");
      setBank("");
      setRekening("");
      setAtasnama("");
      setNominal("");
      setKeterangan("");
    }
  };

  return (
    <div className="mt-5 w-fit border p-5">
      <h1 className="text-2xl font-bold my-3">
        Formulir Konfirmasi Pembayaran
      </h1>
      <p>Mohon isi form konfirmasi pembayaran dibawah ini dengan lengkap :</p>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-5 border-t flex flex-col gap-5"
      >
        <div>
          <label htmlFor="nama">Nama Lengkap</label>
          <input
            onChange={(e) => setNama(e.target.value)}
            value={nama}
            type="text"
            id="nama"
            placeholder="Nama Lengkap"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="Alamat Email"
          />
        </div>
        <div>
          <label htmlFor="telp">No. Telp / Whatsapp</label>
          <input
            onChange={(e) => setTelp(e.target.value)}
            value={telp}
            type="text"
            id="telp"
            placeholder="No. Telp / Whatsapp"
          />
        </div>
        <div>
          <label htmlFor="bank">Nama Bank Pengirim</label>
          <input
            onChange={(e) => setBank(e.target.value)}
            value={bank}
            type="text"
            id="bank"
            placeholder="Nama Bank Pengirim e.g : BCA/MANDIRI/BNI"
          />
        </div>
        <div>
          <label htmlFor="rekening">No. Rekening Pengirim</label>
          <input
            onChange={(e) => setRekening(e.target.value)}
            value={rekening}
            type="text"
            id="rekening"
            placeholder="No. Rekening Pengirim"
          />
        </div>
        <div>
          <label htmlFor="atasnama">Nama Pemilik Rekening</label>
          <input
            onChange={(e) => setAtasnama(e.target.value)}
            value={atasnama}
            type="text"
            id="atasnama"
            placeholder="Nama Pemilik Rekening"
          />
        </div>
        <div>
          <label htmlFor="nominal">Nominal Transfer</label>
          <input
            onChange={(e) => setNominal(e.target.value)}
            value={nominal}
            type="number"
            min="10000"
            step="any"
            id="nominal"
            placeholder="Nominal Transfer"
          />
        </div>
        <div>
          <label htmlFor="keterangan">Keterangan</label>
          <textarea
            onChange={(e) => setKeterangan(e.target.value)}
            value={keterangan}
            className="h-32"
            id="keterangan"
          ></textarea>
        </div>
        <button
          className="bg-slate-900 text-white py-3 px-5 rounded-md w-fit"
          type="submit"
        >
          Kirim
        </button>
      </form>
      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e) => <div className="text-red-600 px-5 py-2">{e}</div>)}
      </div>
    </div>
  );
}
