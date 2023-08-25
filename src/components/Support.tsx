'use client'

import { displayRazorpay } from "@/utils/displayRazorpay";

export default function Support() {
  return (
    <div className="hidden lg:block lg:flex justify-between items-center py-8 px-24 bg-[#B2E0FB] mt-5">
      <div className="">
      <h3 className="lg:text-3xl uppercase text-3xl font-bold my-1 text-gray-700">
        Support the fundraiser
      </h3>
      <p className="text-gray-700 font-medium capitalize">Every small share & donation counts</p>
      </div>
      <div className="flex flex-col items-center justify-center w-1/3 ">
        <button onClick={(e) => displayRazorpay()} className="rounded-full w-2/3 bg-gradient-to-r from-sky-500 to-indigo-500 my-3 py-4 font-semibold text-white hover:text-gray-700 ease-out duration-300">
          Donate
        </button>
        <button className="rounded-full border-2 my-3 w-2/3 py-4 border-gray-400 font-semibold text-gray-700 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-gray-100 hover:text-white ease-out duration-300">
          Share
        </button>
      </div>
    </div>
  );
}
