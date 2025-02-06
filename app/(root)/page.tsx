import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/constants';

const Home = () => {
  return (
    <section className="section_container">
      <h1 className="font-bold text-4xl text-cyan-950 text-center"> Shop for your favorite cat merch with ease</h1>

      <div className="mt-7 card_grid">
        {sampleProducts.length > 0 ? (
          sampleProducts.map((product) => (
            <ProductCard
              key={product.id}
              imgUrl={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          ))
        ) : (
          <p className="no-results">No products found 🐱‍👤</p>
        )}
      </div>
    </section>
  );
};

export default Home;
