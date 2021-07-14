import React from "react";
import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  beforeAll((): void => {
    delete window.location;
    // @ts-ignore
    window.location = {
      href: "",
    };
  });

  afterAll((): void => {
    // @ts-ignore
    window.location = "";
  });

  it("should be in the document", () => {
    const { getByText } = render(<Root name="Testapp" />);
    expect(getByText(/Testapp is mounted!/i)).toBeInTheDocument();
  });
});
