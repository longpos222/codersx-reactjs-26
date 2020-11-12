import React from "react";
import Article from "./Article";

export default function Blog(props) {
  return (
    <div className="all-article">
      {props.articles.map(article => (
        <Article article={article}/>
      ))}
    </div>
  );
}
