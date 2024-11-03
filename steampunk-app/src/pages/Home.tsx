import ItemCarouselSection from "@/components/ItemCarouselSection";

function Home() {
  return (
    <div className="w-[calc(100vw-12px)]">
      <section className="flex h-[calc(100vh-6rem)] flex-col items-center justify-start pt-40">
        <h1 className="text-center text-6xl font-bold lg:text-7xl">
          Octavius's Workshop
        </h1>
        <p className="mt-4 px-8 text-center text-2xl text-bronze-400">
          The premier marketplace for mechanical parts
        </p>
      </section>
      <ItemCarouselSection name="Best Sellers" />
      <ItemCarouselSection name="Cogs & Gears" />
      <ItemCarouselSection name="Engines" />
    </div>
  );
}

export default Home;
