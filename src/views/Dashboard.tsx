import React from "react";
import { Layout, theme } from "antd";

const { Content } = Layout;

const Dashboard: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content style={{ padding: "48px" }}>
      <div
        style={{
          background: colorBgContainer,
          minHeight: 280,
          padding: 24,
          borderRadius: borderRadiusLG,
        }}
      >
        <h1>Welcome to Dashboard</h1>
        <h3>Our dashboard is temporarily unavailable.</h3>
      </div>
    </Content>
  );
};

export default Dashboard;
