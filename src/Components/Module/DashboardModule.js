import { Button } from "antd";
import React, { useContext } from "react";
import { authContext } from "../../App";
import UserTable from "../Table/UserTable";
const DashboardModule = () => {
  const { auth, setAuth } = useContext(authContext);
  return (
    <>
      <div>
        <Button type="primary" onClick={() => setAuth(null)}>
          Logout
        </Button>
        <UserTable />
      </div>
    </>
  );
};

export default DashboardModule;
