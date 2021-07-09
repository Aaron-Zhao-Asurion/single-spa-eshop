import React from "react";
import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root name="Testapp" />);
    expect(getByText(/Testapp is mounted!/i)).toBeInTheDocument();
  });

  it("should have returns and orders button", () => {
    const { getByText } = render(<Root name="Testapp" />);
    expect(getByText(/Returns & Orders/)).toBeInTheDocument();
  });

  it("should have cart", () => {
    const { getByTestId } = render(<Root name="Testapp" />);
    expect(getByTestId("cart-display")).toBeInTheDocument();
  });
});
