import "./CartItem.css";

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h3>{item.name}</h3>

        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>

      <button
        type="button"
        className="remove-button"
        onClick={() => onRemove(item.id)}
        aria-label={`Remove ${item.name} from cart`}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;