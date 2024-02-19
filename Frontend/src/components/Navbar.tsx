import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F5D565] h-[60px] flex items-center justify-between px-4  shadow-md">
      <div>
        <h1 className="text-slate-800 font-bold text-4xl cursor-pointer">
          TaskIt
        </h1>
      </div>
      <div className="flex gap-[20px]">
        <button
          className="py-1 px-3 border-[3px] rounded-full font-semibold border-slate-800 hover:shadow-lg"
          onClick={() => {
            navigate("/signin");
          }}
        >
          Sign In
        </button>
        <button
          className="py-1 px-3 border-[3px] rounded-full font-semibold border-slate-800 hover:shadow-lg"
          onClick={() => {
            navigate("/");
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
