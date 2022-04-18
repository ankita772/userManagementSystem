import React, { useContext, useEffect } from "react";
import { getAllUser, updateUser } from "../../Api";
import { context } from "../../Pages/Dashboard";
import { Form, Input, Button } from "antd";

const UpdateForm = ({ oneUserDetails }) => {
  const { allUserDetails, setAllUserDetails } = useContext(context);
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      username: oneUserDetails.username,
      mobile: oneUserDetails.mobile,
    });
  }, [oneUserDetails]);
  const onFinish = async (values) => {
    console.log("Success:", values);
    if (values) {
      console.log("call api", values.username);
      const data = await updateUser(
        oneUserDetails._id,
        values.username,
        values.mobile
      );
      const allUserData = await getAllUser();
      console.log(allUserData);
      console.log(data);
      setAllUserDetails(allUserData);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
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
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="mobile"
            label="Mobile no"
            rules={[
              {
                required: true,
                message: "mobile no is required!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default UpdateForm;
