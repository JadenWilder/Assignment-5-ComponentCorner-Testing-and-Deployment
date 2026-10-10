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
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 {storeName}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;