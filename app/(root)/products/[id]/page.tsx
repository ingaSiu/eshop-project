import AddToCartBtn from '@/components/AddToCartBtn';
import { Cat } from 'lucide-react';
import Image from 'next/image';
import { db } from '@/database';
import { eq } from 'drizzle-orm';
import { products } from '@/database/schema';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const [productDetails] = await db.select().from(products).where(eq(products.id, id)).limit(1);

  if (!productDetails) {
    return <div className="no-results">Product not found</div>;
  }

  return (
    <>
      <div className="flex gap-10 m-10 items-center flex-col md:flex-row md:justify-center">
        <div>
          <Image src={productDetails.imageUrl} alt={productDetails.title} width={400} height={450} />
        </div>
        <div>
          <h1 className="text-2xl text-center  text-primary font-bold md:mb-14 md:text-4xl">{productDetails.title}</h1>

          <div className="mt-5 mb-4">
            <p className="md:text-lg">{productDetails.description}</p>
            <div className="mt-4 flex items-center gap-1 text-lg md:text-xl ">
              <p>Product rated:</p>
              {productDetails.rating}
              <Cat className="text-orange-500" />
              <p>out of five</p>
            </div>
          </div>

          <div className="flex gap-4 justify-between items-center">
            <p>
              Only <span className="text-primary font-bold">{productDetails.stock}</span> left in stock 🙀
            </p>
            <p className="text-2xl md:text-3xl ">{productDetails.price} €</p>
          </div>

          <AddToCartBtn product={productDetails} className="w-full mt-6 py-8 text-xl " />
        </div>
      </div>

      {/* <div>Recomended products list</div> */}
      {/* You might also like */}
    </>
  );
};

export default page;
