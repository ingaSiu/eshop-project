import AddToCartBtn from './AddToCartBtn';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="product-card">
      <div className="flex flex-col">
        <Link href={`products/${product.id}`}>
          <h3 className="font-semibold text-center text-xl md:text-2xl md:line-clamp-1">{product.title}</h3>
          <div>
            <p className="product-card_desc">{product.description}</p>
            <Image src={product.imageUrl} alt={product.title} width={140} height={164} className="product-card_img" />
          </div>
        </Link>
        <div className="flex flex-col xl:flex-row gap-4 items-center justify-between">
          <div className="flex items-center justify-center gap-4 mt-4 mb-4">
            <p className="text-2xl ml-4 font-semibold">{product.price} €</p>
            <p>
              {product.stock <= 0 ? (
                <span className="text-sm text-red-500"> • Out of Stock</span>
              ) : (
                <span className="text-sm text-green-500">• In Stock</span>
              )}
            </p>
          </div>

          <AddToCartBtn product={product} className="product-card_btn" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
