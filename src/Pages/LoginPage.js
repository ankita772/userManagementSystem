import React, { useState } from "react";
import LoginModule from "../Components/Module/LoginModule";

const LoginPage = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const handleChange = () => {
    if (
      userDetails.usename !== "" &&
      userDetails.mobile.length === 10 &&
      userDetails.email !== "" &&
      userDetails.password.length >= 6
    ) {
      console.log("success");
    }
  };
  return (
    <>
      <LoginModule
        userDetails={userDetails}
        setUserDetails={setUserDetails}
        handleChange={handleChange}
      />
    </>
  );
};

export default LoginPage;
