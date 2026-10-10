import CartItem from "../components/CartItem";

function CartPage({ cart, onRemoveFromCart }) {
  const cartTotal = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <section className="cart-section" id="cart">
      <div className="section-heading">
        <h2>Shopping Cart</h2>
      </div>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <CartItem
                key={`${item.id}-${index}`}
                item={item}
                onRemove={onRemoveFromCart}
              />
            ))}
          </div>

          <div className="cart-total">
            <h3>Total: ${cartTotal.toFixed(2)}</h3>
          </div>
        </>
      )}
    </section>
  );
}

export default CartPage;