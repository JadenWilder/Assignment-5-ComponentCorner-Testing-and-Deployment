import ProductCard from "../components/ProductCard";

function ProductsPage({ products, onAddToCart }) {
  return (
    <section className="products-section" id="products">
      <div className="section-heading">
        <h2>Hats and Sneakers</h2>
        <p>
          Find your next favorite fitted hat, snapback, or pair of shoes
          at a price that fits your budget.
        </p>
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