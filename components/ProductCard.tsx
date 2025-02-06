import { Button } from './ui/button';
import Image from 'next/image';

type Props = {
  imgUrl: string;
  name: string;
  price: number;
  description: string;
};

const ProductCard = ({ imgUrl, name, price, description }: Props) => {
  return (
    <div className="startup-card">
      <div className="flex flex-col">
        <h3 className="text-26-semibold line-clamp-1">{name}</h3>
        <div>
          <p className="startup-card_desc">{description}</p>
          <Image src={imgUrl} alt={name} width={140} height={164} className="startup-card_img" />
        </div>
        <div className="flex-between gap-3 mt-5">
          <p className="text-2xl ml-4 font-semibold">{price} $</p>
          <Button className="startup-card_btn">Add to chart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
