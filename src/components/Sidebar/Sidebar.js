import PropTypes from "prop-types";
import React from "react";
import "./Sidebar.css";

export const Search = ({ action }) => (
  <div className="searchContainer">
    <input className="search" placeholder="Procurar" onChange={action} />
    <img src="search.png" alt="" className="searchIcon" />
  </div>
);

const SearchResult = ({ text, ...props }) => <li {...props}>{text}</li>;

export const Sidebar = ({ actions, results }) => (
  <div className="container">
    <Search action={actions.searchAction} />
    <ul role="search-list">
      {results.map((item, index) => (
        <SearchResult
          text={item.text}
          key={index}
          onClick={() => actions.selectAction(index)}
        />
      ))}
    </ul>
  </div>
);

Sidebar.propTypes = {
  actions: PropTypes.exact({
    searchAction: PropTypes.func,
    selectAction: PropTypes.func
  }),
  results: PropTypes.array
};

Sidebar.defaultProps = {
  actions: {
    searchAction: () => {},
    selectAction: () => {}
  },
  results: [{ text: "Slot 1" }, { text: "Slot 2" }]
};
