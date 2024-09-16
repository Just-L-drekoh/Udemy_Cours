import React from "react";
import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <>
      <h2>Users Work !</h2>
      <Outlet />
    </>
  );
};

export default Users;
