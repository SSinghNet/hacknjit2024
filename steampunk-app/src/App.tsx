import NavBar from "@/components/NavBar";
import ChatPopup from "@/components/ChatPopup";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function App() {
  return (
    <div
      id="background"
      className="h-screen bg-[url('steampunk-overlay.webp')] bg-cover bg-fixed bg-center"
    >
      <NavBar />
      <main className="pt-24">
        <section className="flex h-[calc(100vh-6rem)] flex-col items-center justify-start pt-40">
          <h1 className="text-center text-6xl font-bold lg:text-7xl">
            Octavius's Workshop
          </h1>
          <p className="mt-4 px-8 text-center text-2xl text-bronze-400">
            The premier marketplace for mechanical parts
          </p>
        </section>
        <ChatPopup />
        <section className="flex h-screen flex-col items-center">
          <div className="relative flex flex-col items-center">
            <div className="-translate-y-32 border-[3px] border-cyan-800 px-3 py-1.5 md:px-12 md:py-3">
              <h1 className="text-2xl">Best Sellers</h1>
            </div>

            <div className="-mt-32 h-52 w-[3px] bg-cyan-800"></div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="max-h-72 w-[80vw]"
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-3xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
