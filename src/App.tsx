import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const App: React.FC = () => {
  return (
    <>
      {/* <Header /> */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
