import React from "react";
import expect from "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

test("renders learn react link", () => {
  const renderedApp = render(<Sidebar />);
  const linkElement = renderedApp.getByPlaceholderText(/Procurar/i);
  expect(linkElement).toBeInTheDocument();

  cleanup();
});
