import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import JobDetails from "./components/JobDetails/JobDetails";
import JobInfo from "./components/JobInfo/JobInfo";
import Spinner from "./components/Spinner/Spinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/job-details/:id",
        element: <JobInfo />,
        loader: ({ params }) => fetch("/jobs.json"),
      },
      {
        path: "apply-jobs",
        element: <JobDetails />,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/loder",
        element: <Spinner />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
