import React, { useReducer, useMemo } from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";

const initialState = {
  result_list: [
    {
      text: "Slot 1 contains cool stuff",
      article: { title: "Slot 1 is nuts", body: "Ihhu" }
    },
    {
      text: "Slot 2 is dark",
      article: { title: "Slot 2 is getting hot", body: "News everywhere" }
    }
  ],
  search: "",
  selectedIndex: -1,
  results: []
};

const ACTION_TYPES = {
  SEARCH: "SEARCH",
  SELECT: "SELECT"
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SEARCH:
      var search = payload || "";
      return {
        ...state,
        search: search,
        results: state.result_list.filter(result =>
          result.text.includes(search)
        )
      };
    case ACTION_TYPES.SELECT:
      var index = payload;
      return {
        ...state,
        selectedIndex: index
      };
    default:
      return state;
  }
};

const actions = (type, payload) => {
  switch (type) {
    default:
      return {
        type,
        payload
      };
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const search = input => dispatch(actions(ACTION_TYPES.SEARCH, input));
  const select = index => dispatch(actions(ACTION_TYPES.SELECT, index));
  const getArticle = index => (state.results[index] || {}).article;

  useMemo(() => search(""), []);

  return (
    <div className="app">
      <header className="header">🔥 React Testing</header>
      <div className="body">
        <Sidebar
          actions={{
            searchAction: e => search(e.target.value),
            selectAction: select
          }}
          results={state.results}
        />
        <Content article={getArticle(state.selectedIndex)} />
      </div>
    </div>
  );
};

export default App;
