import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import { Search, SearchResult, Sidebar } from "./Sidebar";

afterEach(cleanup);

test("Sidebar should render", () => {
  const app = render(<Sidebar results={[{ text: "foo" }]} selected={0} />);
  expect(app).toMatchSnapshot();
});

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

test("Search should search when typing", () => {
  const mockCallback = jest.fn();
  const app = render(<Search action={mockCallback} />);

  fireEvent.keyUp(app.getByRole("textbox"), {
    key: "A",
    code: 65,
    charCode: 65
  });
  expect(mockCallback.mock.calls.length).toBe(1);
});

test("SearchResult should render", () => {
  const app = render(<SearchResult text="foo/bar" />);
  expect(app).toMatchSnapshot();
});

test("SearchResult should dispatch click event", () => {
  const mockCallback = jest.fn();
  const app = render(<SearchResult text="foo/bar" onClick={mockCallback} />);
  fireEvent(
    app.getByRole("listitem"),
    new MouseEvent("click", { bubbles: true })
  );
  expect(mockCallback.mock.calls.length).toBe(1);
});

test("SearchResult select should alter appearance", () => {
  const app = render(<SearchResult text="this is selected" selected />);
  expect(app).toMatchSnapshot();
});
