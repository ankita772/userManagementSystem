import React from "react";
import { Form, Input } from "antd";

const Email = () => {
  return (
    <>
      <Form.Item
        name="email"
        label="E-mail"
        style={{ padding: "3%" }}
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "E-mail is required!",
          },
        ]}
      >
        <Input
          placeholder="Please enter your email"
          style={{ width: 300, height: 30 }}
        />
      </Form.Item>
    </>
  );
};

export default Email;
