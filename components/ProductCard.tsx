import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ id, imageUrl, title, price, description, stock }: Products) => {
  return (
    <div className="product-card">
      <div className="flex flex-col">
        <Link href={`products/${id}`}>
          <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          <div>
            <p className="product-card_desc">{description}</p>
            <Image src={imageUrl} alt={title} width={140} height={164} className="product-card_img" />
          </div>
        </Link>
        <div className="flex-between gap-3 mt-5">
          <div className="flex items-center gap-2">
            <p className="text-2xl ml-4 font-semibold">{price} $</p>
            <p>
              {stock <= 0 ? (
                <span className="text-sm text-red-500"> • Out of Stock</span>
              ) : (
                <span className="text-sm text-green-500">• In Stock</span>
              )}
            </p>
          </div>

          <Button className="product-card_btn">Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
