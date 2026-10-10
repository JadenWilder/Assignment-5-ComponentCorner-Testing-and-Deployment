import ProductCard from "../components/ProductCard";

function ProductsPage({ products, onAddToCart }) {
  return (
    <section className="products-section" id="products">
      <div className="section-heading">
        <h2>Featured Products</h2>
        <p>Check out some of our favorite tech essentials.</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;