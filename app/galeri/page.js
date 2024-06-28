import ImageGallery from "@/components/ImageGallery";

const images = [
  {
    src: "/images/gallery/image1.webp",
    alt: "Logo GMSRM",
    description: "Logo GMSRM.",
  },
  {
    src: "/images/gallery/image2.webp",
    alt: "Patung Bunda Maria Santa Rosa Mystica",
    description: "Patung Bunda Maria Santa Rosa Mystica.",
  },
  {
    src: "/images/gallery/image3.webp",
    alt: "Site Plan GMSRM",
    description: "Site Plan GMSRM.",
  },
  {
    src: "/images/gallery/image4.webp",
    alt: "Kegiatan GMSRM",
    description: "Kegiatan GMSRM.",
  },
  {
    src: "/images/gallery/image5.webp",
    alt: "Foto Bersama GMSRM",
    description: "Foto Bersama GMSRM.",
  },
];

export default function GaleriPage() {
  return (
    <main className="p-5">
      <div className="bg-white py-5">
        <div className="container p-8 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center">
          <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
            Image Gallery
          </div>
          <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight lg:text-4xl lg:text-slate-800">
            Galeri
          </h2>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl lg:text-slate-600 text-center">
            Galeri gambar proses pembangunan maupun kegiatan di Gua Maria Sancta
            Rosa Mystica
          </p>
          <ImageGallery images={images} />
        </div>
      </div>
    </main>
  );
}
