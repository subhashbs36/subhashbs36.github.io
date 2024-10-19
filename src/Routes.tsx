import React from "react";
import { useRoutes } from "react-router-dom"
import NotFound from "pages/NotFound";
import Home1 from "pages/Home1";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home1 /> },
    { path: "*", element: <NotFound /> },
    {
      path: "home1",
      element: <Home1 />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
