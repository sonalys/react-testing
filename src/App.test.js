import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import { reducer, ACTION_TYPES } from "./App";

const initialState = {
    result_list: [ { text: 'slot 1' }, { text: 'foo/bar'}],
    results: [],
    search: "",
    selectedIndex: -1
};

test("Search action", () => {
    const search_action = { type: ACTION_TYPES.SEARCH, payload: "1" }
    const newState = reducer(initialState, search_action);

    expect(newState.search).toEqual("1");
    expect(newState.results).toHaveLength(1);
});

test("Select action", () => {
    const search_action = { type: ACTION_TYPES.SELECT, payload: 1 }
    const newState = reducer(initialState, search_action);

    expect(newState.selectedIndex).toEqual(1);
});