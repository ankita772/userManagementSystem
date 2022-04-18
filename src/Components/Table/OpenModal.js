import React, { useContext } from "react";
import { deleteUser, getAllUser } from "../../Api";
import { context } from "../../Pages/Dashboard";
import UpdateForm from "./UpdateForm";
import { Modal, Typography, Space } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const OpenModal = ({
  isModalVisible,
  setIsModalVisible,
  modalType,
  oneUserDetails,
}) => {
  const { allUserDetails, setAllUserDetails } = useContext(context);
  const handleOk = async (modalType) => {
    if (modalType === "Delete") {
      const data = await deleteUser(oneUserDetails._id);
      const allUserData = await getAllUser();
      setAllUserDetails(allUserData);
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const functionWithSwitch = (param) => {
    switch (param) {
      case "Edit":
        return (
          <>
            <UpdateForm oneUserDetails={oneUserDetails} />
          </>
        );
      case "Delete":
        return (
          <Space>
            <InfoCircleOutlined style={{ color: "red" }} />
            <Typography.Text type="danger">
              Are you sure to delete this user record ?
            </Typography.Text>
          </Space>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <Modal
        title={modalType}
        visible={isModalVisible}
        onOk={() => handleOk(modalType)}
        onCancel={handleCancel}
        okText={modalType === "Edit" ? "Ok" : "Delete"}
        cancelText="cancle"
      >
        {functionWithSwitch(modalType)}
      </Modal>
    </>
  );
};

export default OpenModal;
