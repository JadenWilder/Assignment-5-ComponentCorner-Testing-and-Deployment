import CartItem from "../components/CartItem";

function CartPage({ cart, onRemoveFromCart }) {
  const cartTotal = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <section className="cart-section" id="cart">
      <div className="section-heading">
        <h2>Your Shopping Cart</h2>
        <p>Review your hats and sneakers before checking out.</p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty.</h3>
          <p>Find your next favorite hat or pair of sneakers!</p>
        </div>
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
            <p>
              Your total reflects all items currently in your cart.
            </p>
          </div>
        </>
      )}
    </section>
  );
}

export default CartPage;