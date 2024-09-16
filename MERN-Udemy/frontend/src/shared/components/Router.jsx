import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Users from "../../user/pages/Users";
import NewPlace from "../../places/pages/NewPlace";

const RouterConfiguration = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Users />,
      children: [
        {
          index: true,
          element: "test",
        },
        {
          path: "/new",
          element: <NewPlace />,
        },
      ],
    },
  ]);
};

export default RouterConfiguration;
