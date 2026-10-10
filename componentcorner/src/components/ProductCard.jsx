import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <h2>{product.name}</h2>

        <p className="product-description">{product.description}</p>

        <p className="product-price">${product.price.toFixed(2)}</p>

        <div className="product-actions">
          <Link
            to={`/products/${product.id}`}
            className="view-details-button"
          >
            View Details
          </Link>

          <button
            className="product-button"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;