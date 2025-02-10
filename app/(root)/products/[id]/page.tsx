import { Button } from '@/components/ui/button';
import { Cat } from 'lucide-react';
import CounterBtn from '@/components/CounterBtn';
import Image from 'next/image';
import { sampleProducts } from '@/constants';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const product = sampleProducts.find((product) => product.id === parseInt(id));
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="flex gap-10 m-10 items-center flex-col md:flex-row md:justify-center">
        <div>
          <Image src={product.image} alt={product.name} width={400} height={450} />
        </div>
        <div>
          <h1 className="text-4xl text-primary font-bold">{product.name}</h1>

          <div className="mt-5 mb-8">
            <p className="product-card_desc">{product.description}</p>
            <div className="flex items-center gap-1 text-xl mt-4">
              <p>Product rated:</p>
              {product.rating}
              <Cat className="text-orange-500" />
              <p>out of five</p>
            </div>
          </div>

          <div>
            <p className="text-3xl text-right mb-4">{product.price} €</p>

            <div className="flex gap-4 items-center">
              <CounterBtn />
              <p>Only {product.stock} left in stock 🙀</p>
            </div>
          </div>

          <Button className="w-full mt-6 py-8 text-xl">Add to cart</Button>
        </div>
      </div>

      {/* <div>Recomended products list</div> */}
    </>
  );
};

export default page;
