import React from "react";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const Navigate = useNavigate();
  const handelGetStarted = () => {
    Navigate("/courselibrary");
  };
  return (
    <div>
      <div className="w-[380px] h-[230px] bg-[#FFFFFF] rounded-[25px] p-[30px] ml-[31px] justify-between flex flex-col">
        <h2 className="text-[20px] font-bold">Try for free</h2>
        <p className="text-[16px] font-medium">
          Get this learning path plus top-rated picks in tech skills and other
          popular topics.
        </p>
        <button
          onClick={handelGetStarted}
          className="text-[16px] font-bold bg-gradient-to-b from-[#282b85e6] to-[#9a1d80e6] text-white w-[143px] h-[50px] rounded-[12px]"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
