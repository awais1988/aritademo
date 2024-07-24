import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  Layout,
  theme,
  Typography,
  Divider,
  Spin,
  message,
} from "antd";
import { blogsApi } from "../store/blogs/blogsApis";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const PostDetails: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [editMode, setEditMode] = useState(false);
  const [spinning, setSpinning] = React.useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (id) {
      onGetPostDetail(Number(id));
    }
  }, [id]);

  const onGetPostDetail = async (postId: number) => {
    try {
      setSpinning(true);
      const data = await blogsApi.getPostDetail(postId);
      if (data instanceof Error) {
        // Handle the error appropriately
        console.error("Failed to fetch post detail:", data);
        return;
      }
      setSpinning(false);
      setPost(data);
    } catch (error) {
      // Handle unexpected errors
      console.error("An unexpected error occurred:", error);
    }
  };

  const handleEdit = async (values: any) => {
    try {
      const data = await blogsApi.updatePostDetail(Number(id), values);
      if (data instanceof Error) {
        console.error("Failed to update post data", data);
        return;
      }
      setPost({ ...post, ...data });
      setEditMode(false);
    } catch (error) {
      // Handle unexpected errors
      console.error("An unexpected error occurred:", error);
    }
  };

  const onPressDelete = () => {
    messageApi.error("Not working now");
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
        {editMode ? (
          <Form initialValues={post} onFinish={handleEdit}>
            <Form.Item name="title" label="Title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="body" label="Body" rules={[{ required: true }]}>
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <>
            {post && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography style={{ textAlign: "center" }}>
                  <Title>{post.title}</Title>
                  <Paragraph>{post.body}</Paragraph>
                </Typography>
                <Divider />
                <div
                  style={{
                    width: "300px",
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "15px",
                  }}
                >
                  <Button
                    type="primary"
                    icon={<EditOutlined />}
                    onClick={() => setEditMode(true)}
                  >
                    Edit
                  </Button>
                  {contextHolder}
                  <Button
                    type="primary"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => onPressDelete()}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </Content>
  );
};

export default PostDetails;
