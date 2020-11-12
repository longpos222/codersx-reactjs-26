import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import Home from "./components/Home";
import Blog from "./components/Blog";
import AboutMe from "./components/AboutMe";

import "antd/dist/antd.css";
import "./App.css";

const { Header, Content, Footer } = Layout;

export default function App() {
  const [articles, setArticles] = useState([
    {
      id: "1",
      cover: "http://lorempixel.com/640/480/business",
      title: "title 1",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/kaysix_dizzy/128.jpg",
      description: "description 1",
      date: "2020-11-11T18:39:27.818Z",
      content: "content 1"
    },
    {
      id: "2",
      cover: "http://lorempixel.com/640/480/city",
      title: "title 2",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/grahamkennery/128.jpg",
      description: "description 2",
      date: "2020-11-12T08:30:40.520Z",
      content: "content 2"
    }
  ]);
  // const x = {
  //   id: "1",
  //   cover: "http://lorempixel.com/640/480/business",
  //   title: "title 1",
  //   avatar:
  //     "https://s3.amazonaws.com/uifaces/faces/twitter/kaysix_dizzy/128.jpg",
  //   description: "description 1",
  //   date: "2020-11-11T18:39:27.818Z",
  //   content: "content 1"
  // };
  // useEffect(() => {
  //   const url =  "https://5faba92b03a60500167e6ef3.mockapi.io/articles";
  //   fetch(url, { method: 'GET' }).then((res)=>setArticles(res))
  // });

  return (
    <Router>
      <Layout className="layout">
        <Header style={{ display: "flex" }}>
          <div className="logo">
            <img src="https://loremflickr.com/48/48/face" alt="" />
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/blog">Blog</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/aboutme">About me</Link>
            </Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
          <div className="site-layout-content">
            Welcome to my blog!
            <Switch>
              <Route path="/aboutme">
                <AboutMe />
              </Route>
              <Route path="/blog">
                <Blog articles={articles} />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          codersX ©2020 created by j.
        </Footer>
      </Layout>
    </Router>
  );
}
