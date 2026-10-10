import { Link } from "react-router-dom";
import "./Footer.css";

function Footer({ storeName, description, email, phone }) {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-container">
        <div className="footer-section">
          <h2>{storeName}</h2>
          <p>{description}</p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Email: <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>
            Phone: <a href={`tel:${phone}`}>{phone}</a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/products">Shop Collection</Link>
          <Link to="/cart">Shopping Cart</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 {storeName}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;