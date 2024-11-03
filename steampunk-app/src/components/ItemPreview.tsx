import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  image: string;
  id: string;
  title: string;
  price: number;
}

const ItemPreview = ({ image, id, title, price }: Props) => {
  return (
    <Card className="max-w-[350px] border-0 bg-transparent">
      <Link to={`/catalog/${id}`}>
        <img src={image} alt={title} width={350} height={350} />
        <CardContent className="flex flex-col items-start justify-center px-0 pt-4">
          <CardTitle>{title}</CardTitle>
          <CardDescription>${price}</CardDescription>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ItemPreview;
