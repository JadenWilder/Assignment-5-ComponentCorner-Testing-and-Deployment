import { beforeEach, describe, it, expect } from "vitest";
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    localStorage.clear();
    window.history.pushState({}, "", "/");
  });

  it("displays the store homepage", () => {
    render(<App />);

   expect(
  screen.getByRole("heading", {
    level: 1,
    name: "ComponentCorner",
  })
).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Fresh Fits. Classic Kicks.",
      })
    ).toBeInTheDocument();
  });

  it("displays the store products on the products page", async () => {
    window.history.pushState({}, "", "/products");

    render(<App />);

    expect(
      await screen.findByRole("heading", {
        name: "Classic Black Fitted Hat",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Everyday White Sneakers",
      })
    ).toBeInTheDocument();
  });

  it("adds a product to the cart and updates the cart count", async () => {
    const user = userEvent.setup();

    window.history.pushState({}, "", "/products");

    render(<App />);

    await user.click(
      await screen.findByRole("button", {
        name: "Add Classic Black Fitted Hat to cart",
      })
    );

    const cartLink = screen.getByRole("link", {
      name: "Shopping cart with 1 items",
    });

    expect(cartLink).toHaveAttribute("href", "/cart");
    expect(within(cartLink).getByText("1")).toBeInTheDocument();

    await waitFor(() => {
      const savedCart = JSON.parse(
        localStorage.getItem("componentCornerCart")
      );

      expect(savedCart).toHaveLength(1);
      expect(savedCart[0].name).toBe("Classic Black Fitted Hat");
    });
  });

  it("loads a saved cart from localStorage", async () => {
    localStorage.setItem(
      "componentCornerCart",
      JSON.stringify([
        {
          id: 1,
          name: "Classic Black Fitted Hat",
          price: 34.99,
          image: "https://placehold.co/600x400",
          description: "A classic black fitted hat.",
        },
      ])
    );

    window.history.pushState({}, "", "/cart");

    render(<App />);

    expect(
      await screen.findByRole("heading", {
        name: "Classic Black Fitted Hat",
      })
    ).toBeInTheDocument();

    expect(screen.getByText("Total: $34.99")).toBeInTheDocument();
  });

  it("removes a product from the cart and saves the change", async () => {
    const user = userEvent.setup();

    localStorage.setItem(
      "componentCornerCart",
      JSON.stringify([
        {
          id: 1,
          name: "Classic Black Fitted Hat",
          price: 34.99,
          image: "https://placehold.co/600x400",
          description: "A classic black fitted hat.",
        },
      ])
    );

    window.history.pushState({}, "", "/cart");

    render(<App />);

    await user.click(
      await screen.findByRole("button", {
        name: /remove classic black fitted hat/i,
      })
    );

    expect(
      await screen.findByRole("heading", {
        name: "Your cart is empty.",
      })
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(
        JSON.parse(localStorage.getItem("componentCornerCart"))
      ).toEqual([]);
    });
  });
});