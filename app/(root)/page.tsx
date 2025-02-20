import ProductList from '@/components/ProductList';
import { db } from '@/database';
import { desc } from 'drizzle-orm';
import { products } from '@/database/schema';

const Home = async () => {
  const productsList = await db.select().from(products).orderBy(desc(products.createdAt));
  return (
    <>
      <section className="orange_container">
        <h1 className="heading">
          Shop for cat merch, <br /> With ease and comfort 😻
        </h1>
        <p className="sub-heading !max-w-3xl">Find the best deals from biggest cat merch shop! 🐱‍💻</p>
      </section>

      <section className="section_container">
        <ProductList products={productsList} />
      </section>
    </>
  );
};

export default Home;
