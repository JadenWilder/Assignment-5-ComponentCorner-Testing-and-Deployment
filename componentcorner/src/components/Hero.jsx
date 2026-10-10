import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero({ title, subtitle, buttonText }) {
  const navigate = useNavigate();

  function handleShopClick() {
    navigate("/products");
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <button
          className="hero-button"
          onClick={handleShopClick}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default Hero;