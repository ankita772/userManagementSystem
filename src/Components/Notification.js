import React from "react";
import { Alert } from "antd";

const Notification = () => {
  return (
    <>
      <Alert
        message="Success Tips"
        description="Detailed description and advice about successful copywriting."
        type="success"
        showIcon
      />
    </>
  );
};

export default Notification;
