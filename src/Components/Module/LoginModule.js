import React from "react";
import Email from "../EmailAndPass/Email";
import Password from "../EmailAndPass/Password";
import { Form, Button, Typography } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const LoginModule = ({ userDetails, setUserDetails, handleChange }) => {
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

          <Email userDetails={userDetails} setUserDetails={setUserDetails} />
          <Password userDetails={userDetails} setUserDetails={setUserDetails} />
          <Form.Item
            wrapperCol={{ offset: 8, span: 16 }}
            style={{ padding: "3%" }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ padding: "2%", marginBottom: 8 }}
              onClick={handleChange}
            >
              Log in
            </Button>
            <br />
            Or{" "}
            <a href="#" style={{ padding: "3%" }}>
              register now!
            </a>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default LoginModule;
