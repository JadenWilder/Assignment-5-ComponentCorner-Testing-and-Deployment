import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartPage from "./CartPage";

const blackHat = {
  id: 1,
  name: "Classic Black Fitted Hat",
  price: 34.99,
  image: "https://placehold.co/600x400?text=Black+Fitted+Hat",
  description: "A classic black fitted hat.",
};

const whiteSneakers = {
  id: 3,
  name: "Everyday White Sneakers",
  price: 69.99,
  image: "https://placehold.co/600x400?text=White+Sneakers",
  description: "Everyday white sneakers.",
};

describe("CartPage", () => {
  it("displays the empty-cart message when the cart is empty", () => {
    render(<CartPage cart={[]} onRemoveFromCart={vi.fn()} />);

    expect(
      screen.getByRole("heading", { name: "Your Shopping Cart" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Your cart is empty." })
    ).toBeInTheDocument();

    expect(screen.queryByText(/Total:/)).not.toBeInTheDocument();
  });

  it("displays the products in the cart", () => {
    render(
      <CartPage
        cart={[blackHat, whiteSneakers]}
        onRemoveFromCart={vi.fn()}
      />
    );

    expect(
      screen.getByText("Classic Black Fitted Hat")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Everyday White Sneakers")
    ).toBeInTheDocument();
  });

  it("calculates and displays the correct cart total", () => {
    render(
      <CartPage
        cart={[blackHat, whiteSneakers]}
        onRemoveFromCart={vi.fn()}
      />
    );

    expect(screen.getByText("Total: $104.98")).toBeInTheDocument();
  });

  it("calls onRemoveFromCart with the correct product ID", async () => {
    const user = userEvent.setup();
    const onRemoveFromCart = vi.fn();

    render(
      <CartPage
        cart={[blackHat, whiteSneakers]}
        onRemoveFromCart={onRemoveFromCart}
      />
    );

    await user.click(
      screen.getByRole("button", {
        name: /remove classic black fitted hat/i,
      })
    );

    expect(onRemoveFromCart).toHaveBeenCalledTimes(1);
    expect(onRemoveFromCart).toHaveBeenCalledWith(1);
  });
});