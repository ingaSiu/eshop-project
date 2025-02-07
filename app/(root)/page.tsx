import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/constants';

const Home = () => {
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Shop for cat merch, <br /> With ease and comfort 😻
        </h1>
        <p className="sub-heading !max-w-3xl">Find the best deals from biggest cat merch shop! 🐱‍💻</p>
      </section>

      <section className="section_container">
        <div className="mt-7 card_grid">
          {sampleProducts.length > 0 ? (
            sampleProducts.map((product) => (
              <ProductCard
                id={product.id}
                key={product.id}
                imgUrl={product.image}
                name={product.name}
                price={product.price}
                description={product.description}
                stock={product.stock}
              />
            ))
          ) : (
            <p className="no-results">No products found 🐱‍👤</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
