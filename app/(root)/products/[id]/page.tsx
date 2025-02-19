import { Button } from '@/components/ui/button';
import { Cat } from 'lucide-react';
import CounterBtn from '@/components/CounterBtn';
import Image from 'next/image';
import { db } from '@/database';
import { eq } from 'drizzle-orm';
import { products } from '@/database/schema';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const [productDetails] = await db.select().from(products).where(eq(products.id, id)).limit(1);

  if (!productDetails) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="flex gap-10 m-10 items-center flex-col md:flex-row md:justify-center">
        <div>
          <Image src={productDetails.imageUrl} alt={productDetails.title} width={400} height={450} />
        </div>
        <div>
          <h1 className="text-4xl text-primary font-bold">{productDetails.title}</h1>

          <div className="mt-5 mb-8">
            <p className="product-card_desc">{productDetails.description}</p>
            <div className="flex items-center gap-1 text-xl mt-4">
              <p>Product rated:</p>
              {productDetails.rating}
              <Cat className="text-orange-500" />
              <p>out of five</p>
            </div>
          </div>

          <div>
            <p className="text-3xl text-right mb-4">{productDetails.price} €</p>

            <div className="flex gap-4 items-center">
              <CounterBtn stock={productDetails.stock} />
              <p>Only {productDetails.stock} left in stock 🙀</p>
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
