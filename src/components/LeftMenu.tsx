import React, { useEffect, useState } from "react";
import { Layout, Menu, Image, Divider, Typography, Space } from "antd";
import { dashboardApi } from "../store/dashboard/dashboardApis";
import { Link } from "react-router-dom";
import { appLogo, profileImg } from "../utils/images";
import UserInfo from "./UserInfo";

const { Sider } = Layout;

const LeftMenu: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    onGetUser();
  }, []);

  const onGetUser = async () => {
    const userId = Math.floor(Math.random() * 10) + 1;
    try {
      const data = await dashboardApi.getUserData(userId);
      if (data instanceof Error) {
        // Handle the error appropriately
        console.error("Failed to fetch user data:", data);
        return;
      }
      setUser(data);
    } catch (error) {
      // Handle unexpected errors
      console.error("An unexpected error occurred:", error);
    }
  };

  const menuItems = [
    {
      key: "1",
      label: <Link to="/">Dashboard</Link>,
    },
    {
      key: "2",
      label: <Link to="/blogs">Blogs</Link>,
    },
  ];
  return (
    <Sider theme="light" width={220}>
      <div>
        <img src={appLogo} alt="applogo" style={{ width: "220px" }} />
      </div>
      <Divider />
      <UserInfo userData={user} />
      <Divider />
      <Menu theme="light" mode="vertical" items={menuItems} />
    </Sider>
  );
};

export default LeftMenu;
