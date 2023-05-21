import React from "react";

const NoContentError = () => {
  return (
    <div className="w-full flex justify-center mt-[120px] flex-1 text-center text-[18px]">
      <div className="flex flex-col gap-[20px]">
        <span className="text-[56px]">😿</span>
        <span className="font-[500]">Упсссс... помилка</span>
      </div>
    </div>
  );
};

export default NoContentError;
