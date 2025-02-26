import ProductList from '@/components/ProductList';
import Sort from '@/components/Sort';
import { getSortedProducts } from '@/lib/queries/getSortedProducts';

interface HomeProps {
  searchParams: { sort?: string };
}

const Home = async ({ searchParams }: HomeProps) => {
  const sort = searchParams.sort || 'default';
  const productsList = await getSortedProducts(sort);
  return (
    <>
      <section className="orange_container">
        <h1 className="heading">
          Shop for cat merch, <br /> With ease and comfort 😻
        </h1>
        <p className="sub-heading !max-w-3xl">Find the best deals from biggest cat merch shop! 🐱‍💻</p>
      </section>

      <section className="section_container">
        <Sort />
        <ProductList products={productsList} />
      </section>
    </>
  );
};

export default Home;
