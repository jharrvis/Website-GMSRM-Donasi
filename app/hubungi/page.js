import Hero from "@/components/Hero";
export default function HubungiPage() {
  return (
    <main className="p-5">
      <div className="bg-white py-5">
        <div className="container p-8 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
          <Hero
            title="Hubungi Kami"
            subTitle="Contact Us"
            description="Hubungi kami untuk informasi lebih lanjut."
          />
        </div>
      </div>
    </main>
  );
}
