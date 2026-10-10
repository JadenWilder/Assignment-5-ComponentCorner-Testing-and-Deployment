import { Link } from "react-router-dom";
import "./Header.css";

function Header({ storeName, cartCount }) {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="store-name-link">
          <h1 className="store-name">{storeName}</h1>
        </Link>

        <nav className="navigation" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/products">Shop Collection</Link>
          <Link to="/#about">About</Link>
          <Link to="/#contact">Contact</Link>

          <Link
            to="/cart"
            className="cart-container"
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            <span className="cart-icon" aria-hidden="true">
              🛒
            </span>
            <span className="cart-count">{cartCount}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;