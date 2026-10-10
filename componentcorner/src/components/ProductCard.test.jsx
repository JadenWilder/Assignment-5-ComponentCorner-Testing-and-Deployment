import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "./ProductCard";

const testProduct = {
  id: 1,
  name: "Classic Black Fitted Hat",
  price: 34.99,
  image:
    "https://placehold.co/600x400/111827/ffffff?text=Black+Fitted+Hat",
  description:
    "A clean black fitted hat with a flat brim that pairs well with almost any outfit.",
};

describe("ProductCard", () => {
  it("displays the product name and description", () => {
    render(
      <MemoryRouter>
        <ProductCard product={testProduct} onAddToCart={vi.fn()} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: "Classic Black Fitted Hat" })
    ).toBeInTheDocument();

    expect(
      screen.getByText(testProduct.description)
    ).toBeInTheDocument();
  });

  it("displays the product price with two decimal places", () => {
    render(
      <MemoryRouter>
        <ProductCard product={testProduct} onAddToCart={vi.fn()} />
      </MemoryRouter>
    );

    expect(screen.getByText("$34.99")).toBeInTheDocument();
  });

  it("displays the product image with the correct alt text", () => {
    render(
      <MemoryRouter>
        <ProductCard product={testProduct} onAddToCart={vi.fn()} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("img", { name: "Classic Black Fitted Hat" })
    ).toHaveAttribute("src", testProduct.image);
  });

  it("links to the correct product details page", () => {
    render(
      <MemoryRouter>
        <ProductCard product={testProduct} onAddToCart={vi.fn()} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", { name: "View Details" })
    ).toHaveAttribute("href", "/products/1");
  });

  it("calls onAddToCart with the product when clicked", async () => {
    const user = userEvent.setup();
    const onAddToCart = vi.fn();

    render(
      <MemoryRouter>
        <ProductCard
          product={testProduct}
          onAddToCart={onAddToCart}
        />
      </MemoryRouter>
    );

    await user.click(
      screen.getByRole("button", {
        name: "Add Classic Black Fitted Hat to cart",
      })
    );

    expect(onAddToCart).toHaveBeenCalledTimes(1);
    expect(onAddToCart).toHaveBeenCalledWith(testProduct);
  });
});