import { Link, useParams } from "react-router-dom";

function ProductDetailsPage({ products, onAddToCart }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <section className="product-details">
        <h2>Product Not Found</h2>
        <Link to="/products">Back to Products</Link>
      </section>
    );
  }

  return (
    <section className="product-details">
      <img
        src={product.image}
        alt={product.name}
        className="product-details-image"
      />

      <div className="product-details-info">
        <h2>{product.name}</h2>

        <p className="product-details-description">
          {product.description}
        </p>

        <p className="product-details-price">
          ${product.price.toFixed(2)}
        </p>

        <button
          className="product-button"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>

        <br />

        <Link to="/products" className="back-to-products">
          ← Back to Products
        </Link>
      </div>
    </section>
  );
}

export default ProductDetailsPage;