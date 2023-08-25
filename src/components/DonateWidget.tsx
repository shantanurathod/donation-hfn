'use client'

import { displayRazorpay } from "@/utils/displayRazorpay";
import { MouseEventHandler } from "react";

export default function DonateWidget({firstBtn, secBtn, quote} : {firstBtn:string, secBtn:string, quote:string}) {
  // const imageURL = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80"
  return (
    <div className="hidden lg:block sticky shadow-lg top-10 ease-in-out duration-200 col-span-1 overflow-hidden bg-gray-100 rounded-lg ml-9 flex flex-col max-h-[650px]">
      <div className="flex italic bg-[#B2E0FB] bg-no-repeat bg-center h-2/3 items-center justify-center">
        "{quote}"
      </div>
      <div className="flex flex-col h-1/3 items-center justify-center">
        <button onClick={(e) => displayRazorpay()} className="rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 my-3 w-2/3 py-4 font-semibold text-white hover:text-gray-700 ease-out duration-300">
          {firstBtn}
        </button>
        <button className="rounded-full border-2 w-2/3 my-3 py-4 border-gray-400 font-semibold text-gray-700 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-gray-100 hover:text-white ease-out duration-300">
          {secBtn}
        </button>
      </div>
    </div>
  );
} 
