import PropTypes from "prop-types";
import React from "react";
import "./Content.css";

export const Content = ({ article }) => {
  return (
    <div className="article-container">
      <h1>{article.title}</h1>
      {article.body}
    </div>
  );
};

Content.propTypes = {
  article: PropTypes.exact({
    title: PropTypes.string,
    body: PropTypes.string
  })
};

Content.defaultProps = {
  article: {
    title: "",
    body: ""
  }
};
