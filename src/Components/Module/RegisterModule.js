import React from "react";
import Email from "../EmailAndPass/Email";
import Password from "../EmailAndPass/Password";
import Notification from "../Notification";
import { Form, Input, Button, Typography } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const RegisterModule = ({ onFinish }) => {
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
          name="nest-messages"
          style={{ marginTop: 100 }}
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
            REGISTER
          </Title>
          <Form.Item
            name="username"
            label="Name"
            rules={[{ required: true, message: "username is required!" }]}
            style={{ padding: "3%" }}
          >
            <Input
              placeholder="Please enter your username"
              style={{ width: 300, height: 30 }}
            />
          </Form.Item>
          <Form.Item
            name="mobile"
            label="Mobile no"
            rules={[{ required: true, message: "number is required!" }]}
            style={{ padding: "3%" }}
          >
            <Input
              placeholder="Please enter your mobile number"
              style={{ width: 300, height: 30 }}
            />
          </Form.Item>
          <Email />
          <Password />
          <Form.Item
            wrapperCol={{ offset: 8, span: 16 }}
            style={{ padding: "3%" }}
          >
            <Button type="primary" htmlType="submit" style={{ padding: "2%" }}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default RegisterModule;
