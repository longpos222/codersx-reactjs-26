import React, { Fragment } from "react";
import { Card, Avatar } from "antd";

const { Meta } = Card;

export default function Article(props) {
  const { title, description, cover, avatar } = props.article;

  return (
    <Fragment>
      <Card hoverable style={{ width: 240 }} cover={<img alt="" src={cover} />}>
        <Meta
          avatar={<Avatar src={avatar} />}
          title={title}
          description={description}
        />
      </Card>
    </Fragment>
  );
}
