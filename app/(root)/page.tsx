import Filter from '@/components/Filter';
import ProductList from '@/components/ProductList';
import Sort from '@/components/Sort';
import { getSortedProducts } from '@/lib/queries/getSortedProducts';

const Home = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) => {
  const { sort } = await searchParams;
  const productsList = await getSortedProducts(sort || 'default');
  return (
    <>
      <section className="orange_container">
        <h1 className="heading">
          Shop for cat merch, <br /> With ease and comfort 😻
        </h1>
        <p className="sub-heading !max-w-3xl">Find the best deals from biggest cat merch shop! 🐱‍💻</p>
      </section>

      <section className="section_container">
        <div className="flex gap-4">
          <Sort />
          <Filter />
        </div>

        <ProductList products={productsList} />
      </section>
    </>
  );
};

export default Home;
