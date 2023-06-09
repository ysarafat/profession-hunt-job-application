import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import JobDetails from "./components/JobDetails/JobDetails";
import JobInfo from "./components/JobInfo/JobInfo";
import Apply from "./components/Apply/Apply";
import Statistics from "./components/Statistics/Statistics";
import "./index.css";
import Error from "./components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error />,
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
        path: "/apply",
        element: <Apply />,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("/marks.json"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
