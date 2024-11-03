import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useParams } from "react-router-dom";

const Item = () => {
  const { itemID } = useParams();
  const price = 200;
  return (
    <div className="flex h-screen w-[calc(100vw-12px)] -translate-y-24 items-center justify-center gap-8 bg-background">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdna.artstation.com%2Fp%2Fassets%2Fcovers%2Fimages%2F011%2F221%2F632%2Flarge%2Ftoni-bratincevic-purifier-v01-01a.jpg%3F1528436540&f=1&nofb=1&ipt=ec60755f5dd8c028e8195884ada2a2b6566d82eeced003cfd419f129d5de096c&ipo=images"
        className="max-w-[400px]"
      />
      <Card className="border-0 p-8">
        <CardHeader className="max-w-[25ch] p-0 font-['Alegreya_SC'] text-3xl">
          {itemID}
        </CardHeader>
        <p className="font-bold text-teal-800">{price.toFixed(2)} tDUST</p>
        <CardDescription className="mt-4 max-w-[50ch] text-bronze-200">
          Item Description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Molestias perferendis blanditiis suscipit voluptas amet in
          necessitatibus, voluptatem delectus provident at laboriosam velit
          expedita reprehenderit tempore excepturi nostrum recusandae quasi
          deserunt.
        </CardDescription>
        <form className="mt-8">
          <Input type="number" max="50" min="0" placeholder="0" />
          <Button
            type="submit"
            className="mt-4 w-full bg-bronze-700 font-['Alegreya_SC'] text-foreground hover:bg-bronze-700/80"
          >
            Buy Now
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Item;
