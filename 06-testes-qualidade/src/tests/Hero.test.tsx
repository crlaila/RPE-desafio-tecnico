// tests/Hero.test.tsx
import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";

test("renders Hero component correctly", () => {
  render(<Hero />);
  expect(screen.getByText(/planeje sua próxima viagem/i)).toBeInTheDocument();
});
