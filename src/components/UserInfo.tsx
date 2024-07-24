import React from "react";
import { Image, Typography, Space } from "antd";
import { profileImg } from "../utils/images";

const { Text } = Typography;

interface UserInfoProps {
  userData: any;
}

const UserInfo: React.FC<UserInfoProps> = ({ userData }) => {
  return (
    <div style={{ padding: "20px", color: "black" }}>
      {userData && (
        <>
          <Space direction="vertical" align="center">
            <Image
              src={profileImg}
              style={{
                borderRadius: "50%",
                borderWidth: 2,
                borderColor: "#ccc",
                maxWidth: "120px",
                alignSelf: "center",
              }}
            />

            <Text strong>{userData.name}</Text>
            <Text>{userData.email}</Text>
            <Text>{userData.username}</Text>
            <Text>{userData.phone}</Text>
            <Text strong>{"User Address"}</Text>
            <Text>{userData?.address?.suite}</Text>
            <Text>{userData?.address?.street}</Text>
            <Text>{userData?.address?.city}</Text>
            <Text>{userData?.address?.zipcode}</Text>
          </Space>
        </>
      )}
    </div>
  );
};

export default UserInfo;
