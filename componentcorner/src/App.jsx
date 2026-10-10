import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

const products = [
  {
    id: 1,
    name: "Classic Black Fitted Hat",
    price: 34.99,
    image:
      "https://placehold.co/600x400/111827/ffffff?text=Black+Fitted+Hat",
    description:
      "A clean black fitted hat with a flat brim that pairs well with almost any outfit.",
  },
  {
    id: 2,
    name: "Black and White Snapback",
    price: 29.99,
    image:
      "https://placehold.co/600x400/374151/ffffff?text=Black+White+Snapback",
    description:
      "A classic adjustable snapback with a black and white streetwear look.",
  },
  {
    id: 3,
    name: "Everyday White Sneakers",
    price: 69.99,
    image:
      "https://placehold.co/600x400/f3f4f6/111827?text=White+Sneakers",
    description:
      "Versatile everyday sneakers that look good with jeans, shorts, and casual outfits.",
  },
  {
    id: 4,
    name: "Black High-Top Sneakers",
    price: 89.99,
    image:
      "https://placehold.co/600x400/111827/ffffff?text=Black+High+Tops",
    description:
      "Black high-top sneakers with a bold style for everyday wear and streetwear outfits.",
  },
  {
    id: 5,
    name: "Navy Blue Fitted Hat",
    price: 34.99,
    image:
      "https://placehold.co/600x400/1e3a8a/ffffff?text=Navy+Fitted+Hat",
    description:
      "A versatile navy blue fitted hat for a simple, classic look.",
  },
  {
    id: 6,
    name: "Grey Lifestyle Sneakers",
    price: 74.99,
    image:
      "https://placehold.co/600x400/9ca3af/111827?text=Grey+Sneakers",
    description:
      "Comfortable grey lifestyle sneakers that complement your everyday wardrobe.",
  },
];

function App() {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("componentCornerCart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
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
          description="Shop fitted hats, snapbacks, and sneakers at prices that make sense."
          email="support@componentcorner.com"
          phone="(803) 555-0123"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;