import React, { useReducer, useMemo } from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar";

const initialState = {
  result_list: [
    { text: "Slot 1 contains cool stuff" },
    { text: "Slot 2 is dark" }
  ],
  search: "",
  results: []
};

const ACTION_TYPES = {
  SEARCH: "SEARCH"
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SEARCH:
      var search = action.payload || "";
      return {
        ...state,
        search: search,
        results: state.result_list.filter(result => result.text.includes(search))
      };
    default:
      return state;
  }
};

const actions = (type, payload) => {
  switch (type) {
    case ACTION_TYPES.SEARCH:
      return {
        type: ACTION_TYPES.SEARCH,
        payload
      };
    default:
      return {};
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const search = input => dispatch(actions(ACTION_TYPES.SEARCH, input));

  useMemo(() => search(""), []);

  return (
    <div className="app">
      <header className="header">React Testing</header>
      <div className="body">
        <Sidebar
          searchAction={e => search(e.target.value)}
          results={state.results}
        />
        <div>content</div>
      </div>
    </div>
  );
};

export default App;
