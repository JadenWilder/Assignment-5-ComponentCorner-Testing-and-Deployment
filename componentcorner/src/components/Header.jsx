import { Link } from "react-router-dom";
import "./Header.css";

function Header({ storeName, cartCount }) {
  return (
    <header className="site-header">
      <div className="header-container">
        <h1 className="store-name">{storeName}</h1>

        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/#about">About</Link>
          <Link to="/#contact">Contact</Link>

          <Link to="/cart" className="cart-container">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cartCount}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;