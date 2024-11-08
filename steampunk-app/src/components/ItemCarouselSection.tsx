import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ItemCarouselSection = ({ name }: { name: string }) => {
  const navigate = useNavigate();
  return (
    <section className="flex h-screen flex-col items-center">
      <div className="relative flex flex-col items-center">
        <div className="-translate-y-32 border-[3px] border-teal-800 px-12 py-3">
          <h1 className="text-2xl">{name}</h1>
        </div>

        <div className="-mt-32 h-40 w-[3px] bg-teal-800 lg:h-52"></div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-[80vw] max-w-[1000px]"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-0 max-md:max-h-64">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdna.artstation.com%2Fp%2Fassets%2Fcovers%2Fimages%2F011%2F221%2F632%2Flarge%2Ftoni-bratincevic-purifier-v01-01a.jpg%3F1528436540&f=1&nofb=1&ipt=ec60755f5dd8c028e8195884ada2a2b6566d82eeced003cfd419f129d5de096c&ipo=images"
                        className="mb-auto size-full"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Button
          size="lg"
          onClick={() => {
            navigate("/catalog");
          }}
          className="mt-8 font-['Alegreya_SC']"
        >
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default ItemCarouselSection;
