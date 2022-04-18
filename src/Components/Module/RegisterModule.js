import React from "react";
import Email from "../EmailAndPass/Email";
import Password from "../EmailAndPass/Password";
import Notification from "../Notification";
import { Form, Input, Button, Typography } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const RegisterModule = ({ userDetails, setUserDetails, handleChange }) => {
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
        <Form {...layout} name="nest-messages" style={{ marginTop: 100 }}>
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
            name="name"
            label="Name"
            rules={[{ required: true, message: "username is required!" }]}
            style={{ padding: "3%" }}
          >
            <Input
              placeholder="Please enter your username"
              style={{ width: 300, height: 30 }}
              onChange={(e) =>
                setUserDetails({ ...userDetails, username: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            name="number"
            label="Mobile no"
            rules={[{ required: true, message: "number is required!" }]}
            style={{ padding: "3%" }}
          >
            <Input
              placeholder="Please enter your mobile number"
              style={{ width: 300, height: 30 }}
              onChange={(e) =>
                setUserDetails({ ...userDetails, mobile: e.target.value })
              }
            />
          </Form.Item>
          <Email userDetails={userDetails} setUserDetails={setUserDetails} />
          <Password userDetails={userDetails} setUserDetails={setUserDetails} />
          <Form.Item
            wrapperCol={{ offset: 8, span: 16 }}
            style={{ padding: "3%" }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ padding: "2%" }}
              onClick={handleChange}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default RegisterModule;
