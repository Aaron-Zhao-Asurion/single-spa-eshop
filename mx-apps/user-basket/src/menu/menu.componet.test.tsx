import React from "react";
import { render } from "@testing-library/react";
import CustomizedMenus from "./menu.componet";
import { UserBasketMenuItems } from './menu.items';

describe("Menu component", () => {
  it("should have menu items", async () => {
    const { findAllByTestId } = render(<CustomizedMenus menu={UserBasketMenuItems} />);
    const menuItems = await findAllByTestId("basket-menu-item");
    expect(menuItems.length).toBe(UserBasketMenuItems.length);
    expect(menuItems.map(item => item.firstChild.textContent)).toEqual(UserBasketMenuItems.map(bmi => bmi.name));
  });
});
