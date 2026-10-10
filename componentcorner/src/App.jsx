import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 79.99,
      image:
        "https://placehold.co/600x400/111827/ffffff?text=Wireless+Headphones",
      description:
        "Enjoy clear sound and comfortable listening with these wireless headphones.",
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 89.99,
      image:
        "https://placehold.co/600x400/4f46e5/ffffff?text=Mechanical+Keyboard",
      description:
        "A responsive mechanical keyboard built for work, gaming, and everyday use.",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 49.99,
      image:
        "https://placehold.co/600x400/667eea/ffffff?text=Gaming+Mouse",
      description:
        "Get precise control and smooth performance with this ergonomic gaming mouse.",
    },
  ];

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("componentCornerCart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("componentCornerCart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart((currentCart) => [...currentCart, product]);
  }

  function removeFromCart(id) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Header
          storeName="ComponentCorner"
          cartCount={cart.length}
        />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route
              path="/products"
              element={
                <ProductsPage
                  products={products}
                  onAddToCart={addToCart}
                />
              }
            />

            <Route
              path="/products/:id"
              element={
                <ProductDetailsPage
                  products={products}
                  onAddToCart={addToCart}
                />
              }
            />

            <Route
              path="/cart"
              element={
                <CartPage
                  cart={cart}
                  onRemoveFromCart={removeFromCart}
                />
              }
            />
          </Routes>
        </main>

        <Footer
          storeName="ComponentCorner"
          description="Your online store for quality tech products and everyday essentials."
          email="support@componentcorner.com"
          phone="(803) 555-0123"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;