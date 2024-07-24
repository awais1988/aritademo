import React, { useEffect, useState } from "react";
import { List, Typography, Layout, theme, Spin } from "antd";
import { Link } from "react-router-dom";
import { blogsApi } from "../store/blogs/blogsApis";

const { Content } = Layout;

const Blogs: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [posts, setPosts] = useState<any[]>([]);
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    onGetPosts();
  }, []);

  const onGetPosts = async () => {
    const userId = Math.floor(Math.random() * 10) + 1;
    try {
      setSpinning(true);
      const data = await blogsApi.getUserPosts(userId);
      setSpinning(false);
      if (data instanceof Error) {
        // Handle the error appropriately
        console.error("Failed to fetch posts data:", data);
        return;
      }
      setPosts(data);
    } catch (error) {
      // Handle unexpected errors
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <Content style={{ padding: "48px" }}>
      <Spin spinning={spinning} fullscreen />
      <div
        style={{
          background: colorBgContainer,
          minHeight: 280,
          padding: 24,
          borderRadius: borderRadiusLG,
        }}
      >
        <Typography.Title level={2}>Blogs</Typography.Title>
        <List
          itemLayout="horizontal"
          dataSource={posts}
          renderItem={(post) => (
            <List.Item>
              <List.Item.Meta
                title={<Link to={`/blogdetail/${post.id}`}>{post.title}</Link>}
                description={post.body}
              />
            </List.Item>
          )}
        />
      </div>
    </Content>
  );
};

export default Blogs;
