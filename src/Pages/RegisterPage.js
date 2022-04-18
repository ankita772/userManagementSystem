import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterModule from "../Components/Module/RegisterModule";
import { createUser } from "../Api";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = async () => {
    if (
      userDetails.username !== "" &&
      userDetails.mobile.length === 10 &&
      userDetails.email !== "" &&
      userDetails.password.length >= 6
    ) {
      const data = await createUser(userDetails);
      if (data) {
        navigate("/dashboard");
      }
    }
  };
  return (
    <>
      <RegisterModule
        userDetails={userDetails}
        setUserDetails={setUserDetails}
        handleChange={handleChange}
      />
    </>
  );
};

export default RegisterPage;
