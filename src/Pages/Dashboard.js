import React, { useEffect, useState, createContext } from "react";
import DashboardModule from "../Components/Module/DashboardModule";
import { getAllUser } from "../Api";
export const context = createContext();

const Dashboard = () => {
  const [allUserDetails, setAllUserDetails] = useState([]);
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const data = await getAllUser();
    console.log(data);
    setAllUserDetails(data);
  };
  return (
    <>
      <context.Provider value={{ allUserDetails, setAllUserDetails }}>
        <DashboardModule />
      </context.Provider>
    </>
  );
};

export default Dashboard;
