import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";

export const routesApp = [
  {
    path: "/",
    component: <Home />,
  },
];

export const notFoundPageRoute = [
  {
    path: "*",
    component: <NotFoundPage />,
  },
];
