import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterModule from "../Components/Module/RegisterModule";
import { createUser } from "../Api";
import { authContext } from "../App";

const RegisterPage = () => {
  const { auth, setAuth } = useContext(authContext);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const data = await createUser(values);
    if (data.token) {
      localStorage.setItem("data", data);
      setAuth(data);
      navigate("/dashboard");
    }
  };
  return (
    <>
      <RegisterModule onFinish={onFinish} />
    </>
  );
};

export default RegisterPage;
