import Hero from "@/components/Hero";

export default function ProgramPage() {
  return (
    <main className="p-5">
      <div className="bg-white py-5">
        <div className="container p-8 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
          <Hero
            title="Program"
            subTitle="Our Program"
            description="Detail program pembangunan dan perluasan area, termasuk pembelian tanah."
          />
        </div>
      </div>
    </main>
  );
}
