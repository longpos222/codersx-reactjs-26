import React from 'react';
import Article from './Article';

export default function Home(props) {
  return (
    <div className="lastet-article">
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  );
}