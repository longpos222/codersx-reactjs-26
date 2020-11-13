import React from "react";
import Article from "./Article";
import { Pagination } from "antd";

export default function Blog(props) {
  return (
    <div className="all-article">
      {props.articles.map((article) => (
        <Article article={article} />
      ))}
      <Pagination defaultCurrent={props.current} total={props.total} onChange={props.handlePage}/>
    </div>
  );
}

Blog.defaultProps = {
  defaultCurrent: 1,
  total: 20,
}