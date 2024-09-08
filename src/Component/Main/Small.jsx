import React from "react";
import { useGlobalhook } from "./Context";

const Small = () => {
  const data = useGlobalhook();
  return (
    <>
      <h1 className="text-white font-bold ">Hi i am from small{data}</h1>
    </>
  );
};

export default Small;
