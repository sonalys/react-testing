import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

test("Sidebar should have search", () => {
  const app = render(<Sidebar />);
  const Search = app.getByPlaceholderText("Procurar");
  expect(Search).toBeInTheDocument();
  cleanup();
});

test("Sidebar should have list", () => {
  const app = render(<Sidebar />);
  expect(app.getByRole("search-list")).toBeTruthy();
  cleanup();
});

test("Sidebar SearchList should receive props", () => {
  const { getByRole, rerender } = render(
    <Sidebar results={[{ text: "foo/bar" }]} />
  );
  expect(getByRole("search-list").childElementCount).toEqual(1);
  rerender(<Sidebar results={[{ text: "foo" }, { text: "bar" }]} />);
  expect(getByRole("search-list").childElementCount).toEqual(2);
  cleanup();
});
