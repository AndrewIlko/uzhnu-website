import React from "react";

const PopUp = (props: { children: any }) => {
  const { children } = props;
  return (
    <>
      <div className="flex justify-center items-center fixed top-0 left-0 bg-[rgb(0,0,0,0.25)] w-full h-full bg-black-animation">
        <div className="addpost-popup-animation">{children}</div>
      </div>
    </>
  );
};

export default PopUp;
