import React, { createContext, useState } from "react";
import "antd/dist/antd.css";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
export const authContext = createContext();
const App = () => {
  const [auth, setAuth] = useState(null);
  return (
    <>
      <authContext.Provider value={{ auth, setAuth }}>
        <BrowserRouter>
          <Routes>
            {auth?.token ? (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="*"
                  element={<Navigate to="/dashboard" replace />}
                />
              </>
            ) : (
              <>
                <Route path="/" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </authContext.Provider>
    </>
  );
};

export default App;
