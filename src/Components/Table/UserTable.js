import React, { useState, useContext } from "react";
import OpenModal from "./OpenModal";
import { context } from "../../Pages/Dashboard";
import { Table, Tooltip, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const UserTable = () => {
  const { allUserDetails, setAllUserDetails } = useContext(context);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");
  const [oneUserDetails, setOneUserDetails] = useState("");
  const showModal = (val, userDetails) => {
    if (val === "Edit") {
      setModalType("Edit");
    } else {
      setModalType("Delete");
    }
    setIsModalVisible(true);
    setOneUserDetails(userDetails);
  };

  const columns = [
    {
      title: "User Id",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "username",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Edit/Delete",
      render: (userDetails) => (
        <>
          <Tooltip title="edit">
            <Button
              shape="circle"
              icon={<EditOutlined />}
              style={{ marginRight: 10 }}
              onClick={() => showModal("Edit", userDetails)}
            />
          </Tooltip>

          <Tooltip title="delete">
            <Button
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => showModal("Delete", userDetails)}
            />
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <Table
          columns={columns}
          dataSource={allUserDetails}
          style={{ width: "80%" }}
        />
        <OpenModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          modalType={modalType}
          oneUserDetails={oneUserDetails}
        />
      </div>
    </>
  );
};

export default UserTable;
