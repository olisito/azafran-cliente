import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Ingredient } from "./Ingredient";

describe("Ingredient component", () => {
  it("Should render a title", () => {
    render(<Ingredient name="cebolla" />);
    const text = screen.getByText("cebolla");
    expect(text).toBeInTheDocument();
  });
  it("Should call function when button is clicked", () => {
    // Arrange
    const mockFunction = vi.fn();
    render(<Ingredient name="cebolla" handleButtonClick={mockFunction} />);
    // Act
    const button = screen.getByRole("button");
    fireEvent.click(button);
    // Assert
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});