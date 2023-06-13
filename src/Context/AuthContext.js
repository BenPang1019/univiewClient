import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(localStorage.getItem("admin")) || null
  );

  const adminLogin = async (inputs) => {
    const res = await axios.post("/product/login", inputs);
    setCurrentAdmin(res.data);
  };

  const adminLogout = async () => {
    await axios.post("/product/logout");
    setCurrentAdmin(null);
  };

  useEffect(() => {
    localStorage.setItem("admin", JSON.stringify(currentAdmin));
  }, [currentAdmin]);

  return (
    <AuthContext.Provider value={{ currentAdmin, adminLogin, adminLogout }}>
      {children}
    </AuthContext.Provider>
  );
};