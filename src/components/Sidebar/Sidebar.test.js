import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

afterEach(cleanup);

test("Sidebar should have search", () => {
  const app = render(<Sidebar />);
  const Search = app.getByPlaceholderText("Procurar");
  expect(Search).toBeInTheDocument();
});

test("Sidebar should have list", () => {
  const app = render(<Sidebar />);
  expect(app.getByRole("list")).toBeTruthy();
});

test("Sidebar SearchList should receive props", () => {
  let list = [{ text: "foo/bar" }];
  const { getByRole, rerender } = render(<Sidebar results={list} />);
  expect(getByRole("list").childElementCount).toEqual(list.length);
  list.push({ text: "bar" });
  rerender(<Sidebar results={list} />);
  expect(getByRole("list").childElementCount).toEqual(list.length);
});
