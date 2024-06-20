import { Route, Routes } from "react-router-dom";

import React from "react";
import { routesApp, notFoundPageRoute } from "./RoutesApp";

const RouteComponent = () => {
  return (
    <Routes>
      {notFoundPageRoute.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
      {routesApp.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};

export default RouteComponent;
