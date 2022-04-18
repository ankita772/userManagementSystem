import React from "react";
import { Form, Input } from "antd";

const Password = () => {
  return (
    <>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "password is required!" }]}
        style={{ padding: "3%" }}
      >
        <Input.Password
          placeholder="Please enter your password"
          style={{ width: 300, height: 30 }}
        />
      </Form.Item>
    </>
  );
};

export default Password;
