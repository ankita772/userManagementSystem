import React, { useContext, useState } from "react";
import LoginModule from "../Components/Module/LoginModule";
import { authContext } from "../App";
import { loginUser } from "../Api";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { auth, setAuth } = useContext(authContext);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const data = await loginUser(values);
    if (data.token) {
      localStorage.setItem("data", data);
      setAuth(data);
      navigate("/dashboard");
    }
    console.log("success");
  };
  return (
    <>
      <LoginModule onFinish={onFinish} />
    </>
  );
};

export default LoginPage;
