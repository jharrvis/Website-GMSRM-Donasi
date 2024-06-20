export default function ConfirmationForm() {
    return (
        <div className="mt-5 w-fit border p-5">
            <h1 className="text-2xl font-bold my-3">Formulir Konfirmasi Pembayaran</h1>
            <p>Mohon isi form konfirmasi pembayaran dibawah ini dengan lengkap :</p>
            <form className="py-4 mt-5 border-t flex flex-col gap-5">
                <div>
                    <label htmlFor="nama">Nama Lengkap</label>
                    <input type="text" id="nama" placeholder="Nama Lengkap" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Alamat Email" />
                </div>
                <div>
                    <label htmlFor="telp">No. Telp / Whatsapp</label>
                    <input type="text" id="telp" placeholder="No. Telp / Whatsapp" />
                </div>
                <div>
                    <label htmlFor="rekening">No. Rekening Pengirim</label>
                    <input type="text" id="rekening" placeholder="No. Rekening Pengirim" />
                </div>
                <div>
                    <label htmlFor="atasnama">Nama Pemilik Rekening</label>
                    <input type="text" id="atasnama" placeholder="Nama Pemilik Rekening" />
                </div>
                <div>
                    <label htmlFor="nominal">Nominal Transfer</label>
                    <input type="number" min="10000" step="any" id="nominal" placeholder="Nominal Transfer" />
                </div>
                <div>
                    <label htmlFor="keterangan">Nama Lengkap</label>
                    <textarea className="h-32" id="keterangan"></textarea>
                </div>
                <button className="bg-slate-900 text-white py-3 px-5 rounded-md w-fit" type="submit">Kirim</button>
            </form>
        </div>
);
}