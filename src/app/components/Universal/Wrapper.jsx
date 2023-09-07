import React from "react";

export default function Wrapper({className, children}) {
  return (
    <div
      className={`w-full max-w-[1440px] mx-auto px-[10px] md:px-[20px] ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}
