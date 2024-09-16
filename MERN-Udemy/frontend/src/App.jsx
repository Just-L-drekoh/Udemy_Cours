import React from "react";
import { RouterProvider } from "react-router-dom";
import RouterConfiguration from "./shared/components/Router";

const App = () => {
  const router = RouterConfiguration();
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
