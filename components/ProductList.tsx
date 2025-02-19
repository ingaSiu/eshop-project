import ProductCard from './ProductCard';

interface Props {
  products: Products[];
}

const ProductList = ({ products }: Props) => {
  return (
    <div className="mt-7 card_grid">
      {products.length > 0 ? (
        products.map((product) => <ProductCard key={product.id} {...product} />)
      ) : (
        <p className="no-results">No products found 🐱‍👤</p>
      )}
    </div>
  );
};

export default ProductList;
