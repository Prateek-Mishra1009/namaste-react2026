import React from "react";
import { lazy, Suspense } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./Error";
import Contact from "./Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};


const Networking = lazy(() => import("./components/Network"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/online",
        element: (
          <Suspense fallback={<h1>Loading.........</h1>}>
            <Networking />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
