import ItemPreview from "@/components/ItemPreview";

const Catalog = () => {
  const items = [
    {
      name: "Antique Brass Gear",
      image_url: "", // No image required as specified
      price: 45.99,
    },
    {
      name: "Copper Pressure Valve",
      image_url: "",
      price: 30.5,
    },
    {
      name: "Industrial Steel Spring",
      image_url: "",
      price: 12.75,
    },
    {
      name: "Vintage Steam Gauge",
      image_url: "",
      price: 89.0,
    },
    {
      name: "Polished Iron Lever",
      image_url: "",
      price: 22.3,
    },
    {
      name: "Precision Clockwork Screw",
      image_url: "",
      price: 3.99,
    },
  ];

  return (
    <>
      <aside
        id="filters"
        style={{ backgroundImage: "url('/parchment2.webp')" }}
        className="fixed left-10 z-40 h-full w-[20rem] bg-cover bg-no-repeat p-8 px-9 brightness-90"
      >
        <h1 className="text-xl font-bold text-bronze-700">Filters</h1>
        <hr />
        <div className="mt-4">
          <h2 className="text-lg text-bronze-700">Category</h2>
          <h2 className="text-lg text-bronze-700">Price</h2>
        </div>
      </aside>
      <div className="relative flex -translate-y-24 justify-center bg-background pl-[25rem] pt-24">
        <div className="grid grid-cols-1 gap-4 pr-9 md:grid-cols-2 lg:grid-cols-3">
          {items?.map((item) => (
            <ItemPreview
              key={item.name}
              title={item.name}
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdna.artstation.com%2Fp%2Fassets%2Fcovers%2Fimages%2F011%2F221%2F632%2Flarge%2Ftoni-bratincevic-purifier-v01-01a.jpg%3F1528436540&f=1&nofb=1&ipt=ec60755f5dd8c028e8195884ada2a2b6566d82eeced003cfd419f129d5de096c&ipo=images"
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Catalog;
