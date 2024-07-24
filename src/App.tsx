import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import LeftMenu from "./components/LeftMenu";

import Dashboard from "./views/Dashboard";
import Blogs from "./views/Blogs";
import PostDetails from "./views/PostDetails";

const { Header, Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <LeftMenu />
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogdetail/:id" element={<PostDetails />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
