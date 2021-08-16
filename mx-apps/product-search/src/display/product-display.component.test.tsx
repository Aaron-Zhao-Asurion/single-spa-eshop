import React from "react";
import { render } from "@testing-library/react";
import ProductDisplay from "./product-display.component";
import { ProductFruitItems } from './product.items';

describe("Product Display component", () => {
  it("should have products displayed", async () => {
    const { findAllByTestId } = render(<ProductDisplay products={ProductFruitItems} />);
    const itemBoxes = await findAllByTestId("product-box");
    expect(itemBoxes.length).toBe(ProductFruitItems.length);
    expect(itemBoxes.map(box => box.firstChild.textContent)).toEqual(ProductFruitItems.map(ft => ft.name));
  });

  it("should have add to cart button for each item", async () => {
    const { findAllByTestId } = render(<ProductDisplay products={ProductFruitItems} />);
    const addBtns = await findAllByTestId("add-product-btn");
    expect(addBtns.length).toBe(ProductFruitItems.length);
    expect(addBtns.map(btn => btn.textContent)).toEqual(new Array(ProductFruitItems.length).fill("Add to cart"));
  });
});
