import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import Home from "./components/Home";
import Blog from "./components/Blog";
import AboutMe from "./components/AboutMe";

import "antd/dist/antd.css";
import "./App.css";
import logo from './images/logo.jpeg';

const { Header, Content, Footer } = Layout;

export default function App() {
  const [articles, setArticles] = useState([]);
  
  
  const [lastestArticlie, setLastestArticlie] = useState([]);
  useEffect(() => {
    const url =  "https://5faba92b03a60500167e6ef3.mockapi.io/articles?sortBy=date&order=date&page=1&limit=4";
    fetch(url, { method: 'GET' }).then(res=>res.json()).then((res)=>setLastestArticlie(res));
  },[]);

  const [page, setPage] = useState({});

  const handlePage = function(page, pageSize) {
    setPage((x) => {
      return {...x, current: page};
    });
  };

  useEffect(() => {
    const url = `https://5faba92b03a60500167e6ef3.mockapi.io/articles`;
    fetch(url, { method: 'GET' }).then(res=>res.json()).then((res)=>{
      setPage({total: res.length});
    });
  },[]);

  useEffect(() => {
    const url =  `https://5faba92b03a60500167e6ef3.mockapi.io/articles?sortBy=date&order=date&page=${page.current || 1}&limit=8`;
    fetch(url, { method: 'GET' }).then(res=>res.json()).then((res)=>{
      setArticles(res);
    });
  },[page]);

  return (
    <Router>
      <Layout className="layout">
        <Header style={{ display: "flex" }}>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <Link exact to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link exact to="/blog">Blog</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link exact to="/aboutme">About me</Link>
            </Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
          <div className="site-layout-content">
            <Switch>
              <Route path="/aboutme">
                <AboutMe />
              </Route>
              <Route path="/blog">
                <Blog 
                  articles={articles} 
                  handlePage={handlePage} 
                  total={page.total}
                  current={page.current}
                  />
              </Route>
              <Route path="/">
                <Home lastestArticlie={lastestArticlie}/>
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
