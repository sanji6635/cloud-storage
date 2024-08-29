import React from "react";
import Navbar from "../navbar/Navbar";
import Profile from "../profile/Profile";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Profile />
      <main>{children}</main>
    </>
  );
};

export default Layout;
