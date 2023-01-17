import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import Error from "./components/Error";

const AppLayout = () => {
  const [isLogin, setIsLogin] = useState(true);

  const changeLogin = (isLogin) => {
    setIsLogin(isLogin);
  };

  return isLogin ? (
    <Login changeLogin={changeLogin} />
  ) : (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
