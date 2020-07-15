// import React, { Fragment } from "react";
import React from "react";
const FirstApp = () => {
  //   const salute = [1, 2, 3, 4, 5, 6];
  //   const salute = {
  //     name: "Juan",
  //     age: 20,
  //   };
  const salute = "Hello, World!";
  return (
    <>
      {/* <h1> {salute} </h1> */}
      {/* <h1>{JSON.stringify(salute, null, 3)}</h1> */}
      <h1>{salute}</h1>
      <p>My first React App</p>
    </>
  );
};

export default FirstApp;
