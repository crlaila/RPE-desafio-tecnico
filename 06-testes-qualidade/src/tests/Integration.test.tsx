// tests/Integration.test.tsx
import { render, fireEvent, screen } from "@testing-library/react";
import Hero from "../components/Hero";

test("checks if input and button interact correctly", () => {
  render(<Hero />);
  const input = screen.getByPlaceholderText(/para onde você vai/i);
  fireEvent.change(input, { target: { value: "Rio de Janeiro" } });
  expect(input.value).toBe("Rio de Janeiro");
});
