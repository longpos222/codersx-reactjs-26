import React, { Fragment } from "react";
import Article from "./Article";

export default function Home(props) {
  return (
    <Fragment>
      <h1>Welcome to my blog !</h1>
      <div className="lastet-article">
        {props.lastestArticlie.map((article) => (
          <Article article={article} />
        ))}
      </div>
    </Fragment>
  );
}
