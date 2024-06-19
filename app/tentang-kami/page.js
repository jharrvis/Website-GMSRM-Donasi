const team = [
  {
      name: "Bp. Albertus Yohanes Sutopo",
      title: "Ketua",
  },
  {
      name: "Albertus Antok Sudaryanto (Sombron)",
      title: "Sekretaris 1",
  },
  {
      name: "Christyana Susi Listyowati",
      title: "Sekretaris 2",
  },
  {
      name: "Christina Lilik Yulianawati (Banyuurip)",
      title: "Bendahara 1",
  },
  {
      name: "Agustinus Triwidianto",
      title: "Bendahara 2",
  },
]
const layananInternal = [
  {
      name: "Albertus Sutignyo (Lendoh)",
      title: "Koordinator Satuan Pelayanan Internal",
  },
  {
      name: "Fransiscus Xaverius Suponco (Banyuurip)",
      title: "Pelayanan Liturgi dan Peribadatan",
  },
  {
      name: "Widiantoro (Kebondowo)",
      title: "Pelayanan Liturgi dan Peribadatan",
  },
  {
      name: "Yustinus Subagyo (Banyuurip)",
      title: "Pelayanan SarPras Rumah Tanggga",
  },
  {
      name: "A. Yasmanto (Getas)",
      title: "Pelayanan SarPras Rumah Tanggga",
  },
]
const layananEksternal = [
  {
      name: "Bp. Anselmus Aka",
      title: "Koordinator Satuan Pelayanan Eksternal",
  },
  {
      name: "Abertus Magnus Roy",
      title: "Tim Perencanaan Pengembangan",
  },
  {
      name: "Soeharto TNI (Banyuurip)",
      title: "Pelayanan Keamanan dan Parkir",
  },
  {
      name: "Supono (Sombron)",
      title: "Pelayanan Keamanan dan Parkir",
  },
  {
      name: "Anjas Kurniawan (Tlogo)",
      title: "Pelayanan Humas dan Promosi",
  },
]


export default function AboutPage() {
    return (
<section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                <div className="max-w-xl mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Tim Pengelola
                    </h3>
                    <p className="text-gray-600 mt-3">
                      Struktur Organisasi Tim Pengelola Gua Maria Sancta Rosa Mystic
                    </p>
                </div>
                <div className="mt-12">
                    <h2>Pastor Kepala</h2>
                    <div className="mt-2">
                        <h4 className="text-gray-700 font-semibold sm:text-lg">Romo YP.A Jayeng Siswanto, MSF</h4>
                        <p className="text-indigo-600">Pastor Kepala Paroki</p>
                    </div>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-5">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="mt-2">
                                        <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="mt-12">
                    <h1 className="text-2xl font-semibold">Satuan Pelayanan Internal</h1>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-5">
                        {
                            layananInternal.map((item, idx) => (
                                <li key={idx}>
                                    <div className="mt-2">
                                        <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="mt-12">
                    <h1 className="text-2xl font-semibold">Satuan Pelayanan Eksternal</h1>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-5">
                        {
                            layananEksternal.map((item, idx) => (
                                <li key={idx}>
                                    <div className="mt-2">
                                        <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
  