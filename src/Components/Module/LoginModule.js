import React from "react";
import Email from "../EmailAndPass/Email";
import Password from "../EmailAndPass/Password";
import { Form, Button, Typography } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const LoginModule = ({ onFinish }) => {
  const { Title } = Typography;

  return (
    <>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Form
          {...layout}
          name="normal_login"
          style={{ marginTop: 100 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Title
            level={4}
            style={{
              display: "flex",
              justifyContent: "center",
              textDecoration: "underline",
            }}
          >
            LOGIN
          </Title>

          <Email />
          <Password />
          <Form.Item
            wrapperCol={{ offset: 8, span: 16 }}
            style={{ padding: "3%" }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ padding: "2%", marginBottom: 8 }}
            >
              Log in
            </Button>
            <br />
            Or{" "}
            <a href="/" style={{ padding: "3%" }}>
              register now!
            </a>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default LoginModule;
