import { render, screen } from "@testing-library/react";
import Home from "../../src/pages";

describe("Register component", () => {
  it("should render Register component correctly", () => {
    render(<Home />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });
});
