import PropTypes from "prop-types";
import React from "react";
import "./Sidebar.css";


const Search = ({ action }) => (
  <div className="searchContainer">
    <input className="search" placeholder="Procurar" onChange={action} />
    <img src="search.png" alt="" className="searchIcon" />
  </div>
);

const SearchResult = ({ text }) => <li>{text}</li>;

export const Sidebar = ({ searchAction, results }) => (
  <div className="container">
    <Search action={searchAction} />
    <ul>
      {results.map((item, index) => (
        <SearchResult text={item.text} key={index} />
      ))}
    </ul>
  </div>
);

Sidebar.propTypes = {
  searchAction: PropTypes.func,
  results: PropTypes.array
};

Sidebar.defaultProps = {
  searchAction: () => {},
  results: ["Slot 1", "Slot 2"]
};
