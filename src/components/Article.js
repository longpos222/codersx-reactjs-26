import React from "react";
import { Card, Avatar } from "antd";

const { Meta } = Card;

export default function Article(props) {
  const { id, title, description, cover, avatar } = props.article;

  return (
    <div className="article">
      <p>{props.article["id"]}</p>
      {/* <Card hoverable style={{ width: 240 }} cover={<img alt="" src={cover} />}>
        <Meta
          avatar={<Avatar src={avatar} />}
          title={title}
          description={description}
        />
      </Card> */}
    </div>
  );
}
