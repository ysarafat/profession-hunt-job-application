import React from "react";
import PageTitle from "../PageTitle/PageTitle";
const Blog = () => {
  return (
    <div className="font-primary">
      <PageTitle>Blog</PageTitle>
      <div className="container mx-auto p-4 mt-20">
        <div className="bg-background p-7 rounded-lg  ">
          <div className=" bg-white rounded-lg p-5 my-3 text-lg font-medium">
            <h1 className="text-2xl">Q1 : When the context api is used?</h1>
            <p className="mt-3">
              <b>Ans:</b> Context API is commonly used in React applications to
              manage state that needs to be accessed by multiple components
              across the component tree. It provides a way to pass data through
              the component tree without having to manually pass props at each
              level.
            </p>
          </div>

          <div className=" bg-white rounded-lg p-5 my-3 text-lg font-medium">
            <h1 className="text-2xl">Q2 : What is custom hook?</h1>
            <p className="mt-3">
              <b>Ans:</b> Custom hook in React is a reusable function that
              contains a set of stateful logic that can be shared between
              multiple components. Custom hooks allow you to extract reusable
              logic from components and create a standalone function that can be
              used across application.
            </p>
          </div>

          <div className=" bg-white rounded-lg p-5 my-3 text-lg font-medium">
            <h1 className="text-2xl">Q3 : What is useRef in React?</h1>
            <p className="mt-3">
              <b>Ans:</b> useRef is a built-in hook in React that returns a
              mutable object with a current property. This hook allows you to
              keep a reference to a DOM element or any other value that you need
              to persist between renders.
            </p>
          </div>

          <div className=" bg-white rounded-lg p-5 my-3 text-lg font-medium">
            <h1 className="text-2xl">Q4 : What is useRef in React?</h1>
            <p className="mt-3">
              <b>Ans:</b> useMemo is a built-in hook in React that allows you to
              optimize the performance of your components by memoizing the
              result of a function. This hook returns a memoized value that only
              recalculates if its dependencies change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
