import React, { useReducer, useMemo } from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";

const articleFactory = (title, body) => ({
  title,
  body
});

const initialState = {
  result_list: [
    {
      text: "Slot 1 contains cool stuff",
      article: articleFactory("Slot 1 is nuts", "Ihhu")
    },
    {
      text: "Slot 2 is dark",
      article: articleFactory("Slot 2 is getting hot", "News everywhere")
    }
  ],
  search: "",
  selectedIndex: -1,
  results: []
};

export const ACTION_TYPES = {
  SEARCH: "SEARCH",
  SELECT: "SELECT"
};

export const reducer = (state, { type, payload }) => {
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

const actions = (dispatch, type, payload) => {
  switch (type) {
    default:
      dispatch({ type, payload });
      return;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const search = input => actions(dispatch, ACTION_TYPES.SEARCH, input);
  const select = index => actions(dispatch, ACTION_TYPES.SELECT, index);
  const getArticle = index => (state.results[index] || {}).article;

  useMemo(() => search(""), []);

  return (
    <div className="app">
      <header className="header">React Testing</header>
      <div className="body">
        <Sidebar
          actions={{
            searchAction: e => search(e.target.value),
            selectAction: select
          }}
          results={state.results}
          selected={state.selectedIndex}
        />
        <Content article={getArticle(state.selectedIndex)} />
      </div>
    </div>
  );
};

export default App;
