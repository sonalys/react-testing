import PropTypes from "prop-types";
import React from "react";
import "./Sidebar.css";

export const Search = ({ action }) => (
  <div className="searchContainer">
    <input className="search" placeholder="Procurar" onKeyUp={action} />
    <img src="search.png" alt="" className="searchIcon" />
  </div>
);

export const SearchResult = ({ text, selected, ...props }) => (
  <li {...props} className={selected ? "selected" : ""}>
    {text}
  </li>
);

export const Sidebar = ({ actions, selected, results }) => (
  <div className="container">
    <Search action={actions.searchAction} />
    <ul>
      {results.map((item, index) => (
        <SearchResult
          text={item.text}
          key={index}
          onClick={() => actions.selectAction(index)}
          selected={selected === index}
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
  results: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    })
  )
};

Sidebar.defaultProps = {
  actions: {
    searchAction: () => {},
    selectAction: () => {}
  },
  results: []
};
